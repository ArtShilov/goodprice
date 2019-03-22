import express from 'express';

const Product = require('./models/product');
const Shops = require('./models/shops');

const router = express.Router();

router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.status(200);
  res.send(products);
});

router.get('/posts', (req, res) => {
  setTimeout(() => res.send([
    { id: 1, title: 'First Post', description: 'The very best first post...' },
    { id: 2, title: 'Second Post', description: 'Dirty post :(' }
  ]), 1000);
});

const usersArr = [
  { login: 'mike', name: 'Michael Klishevich' },
  { login: 'john', name: 'John King' }
];

router.post('/login', (req, res) => {
  console.log(JSON.stringify(req.body));
  const requestUser = req.body.login;
  const currentUser = usersArr.filter(el => el.login === requestUser)[0];
  console.log('currentUser', currentUser);
  setTimeout(() => {
    if (currentUser) {
      res.send(currentUser);
    } else {
      res.status(401);
      res.send('401 UNAUTHORIZED');
    }
  }, 1000);
});

export default router;
