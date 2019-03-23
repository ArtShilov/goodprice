const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const Users = require('../models/users');
const authenticationMiddleware = require('./middleware');

// Generate Password
// const saltRounds = 10;
// const myPlaintextPassword = 'my-password';
// const salt = bcrypt.genSaltSync(saltRounds);
// const passwordHash = bcrypt.hashSync(myPlaintextPassword, salt);

// const user = {
//   username: 'test-user',
//   passwordHash,
//   id: 1
// };

async function findUser(username, callback) {
  console.log(username);
  const user = await Users.findOne({ username });
  if (user !== null) {
    return callback(null, user);
  }
  return callback(null);
}

// passport.serializeUser((user, cb) => {
//   cb(null, user.username);
// });

// passport.deserializeUser((username, cb) => {
//   findUser(username, cb);
// });

// passport.deserializeUser((username, cb) => {
//   cb(null, user.username);
// });

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


function initPassport() {
  console.log('started')
  passport.use(new LocalStrategy(
    (username, password, done) => {
      findUser(username, (err, user) => {
        if (err) {
          return done(err);
        }

        // User not found
        if (!user) {
          console.log('User not found');
          return done(null, false);
        }

        // Always use hashed passwords and fixed time comparison
        console.log(user);
        console.log(password);
        bcrypt.compare(password, user.password, (err, isValid) => {
          if (err) {
            return done(err);
          }
          if (!isValid) {
            return done(null, false);
          }
          return done(null, user);
        });
      });
    }
  ));

  passport.use(new FacebookStrategy({
    clientID: 323415254981227,
    clientSecret: '49978be6766f60e7ab02b9abe984f926',
    callbackURL: '/user/auth/facebook/callback'
  },
  ((accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile));
  })));

  passport.authenticationMiddleware = authenticationMiddleware;
}

module.exports = initPassport;
