import fs from 'fs';
import express from 'express';
import path from 'path';
import proxy from 'http-proxy-middleware';
import handlebars from 'handlebars';
import bodyParser from 'body-parser';
import config from './config/default';
import router from './routes/router';
import user from './routes/user';
import { seed } from './getParse';

require('dotenv').config();
const winston = require('winston');
const expressWinston = require('express-winston');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const exphbs = require('express-handlebars');


const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


const db = mongoose.connect( // eslint-disable-line
  process.env.database,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);

require('./authentication').init(app);


seed();

app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    collection: 'session',
    autoRemove: 'interval',
    autoRemoveInterval: 120
  }),
  key: 'user_sid',
  secret: 'anything here',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 6000000
  }
}));


app.use(passport.initialize());
app.use(passport.session());


app.engine('.hbs', exphbs({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views'),
  partialsDir: path.join(__dirname)
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


const { buildConfig: { assetsDir, targetDir }, server: { port }, proxyAssets } = config;

app.use('/api2', proxy({ target: 'https://api.priceva.com/api/v1/product/list', changeOrigin: true }));

if (config.appModeDev) {
  app.use(
    `/${assetsDir}`,
    proxy({ target: `http://${proxyAssets.host}:${proxyAssets.port}`, changeOrigin: true }),
  );
} else {
  app.use(
    `/${assetsDir}`,
    express.static(path.join(process.cwd(), targetDir, 'client')),
  );
}

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.json()
  ),
  meta: true,
  msg: 'HTTP {{res.statusCode}} {{req.method}} {{req.url}}',
  expressFormat: true,
  colorize: false
}));

app.use('/api', router);
app.use('/user', user);

app.use('*', (req, res) => {
  const template = handlebars.compile(fs.readFileSync(
    path.join(__dirname, 'index.hbs'),
    'utf8',
  ));
  const context = {
    title: 'GoodPrice'
  };
  res.send(template(context));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
