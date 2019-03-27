import express from 'express';

const Product = require('../models/product');
const Shops = require('../models/shops');
const Carts = require('../models/cart');
const authenticationMiddleware = require('../authentication/middleware');

const router = express.Router();


router.get('/cart', authenticationMiddleware(), async (req, res) => {
  // if (req.session.user) {
  console.log(req.session.user._id);
  const carts = await Carts.find({ user_id: req.session.user._id });
  res.status(200);
  res.send(carts);
  // } else {
  //   res.status(401);
  //   res.send('401 UNAUTHORISED USER');
  // }
});

router.post('/cart', authenticationMiddleware(), async (req, res, next) => {
  try {
    console.log(req.session.user._id);
    // if (req.session.user) {
    const cart = new Carts({
      user_id: req.session.user.userName,
      cart: req.body.cart
    });
    await cart.save();
    res.status(200);
    res.send('CART SAVED');
    // } else {
    //   res.status(500);
    //   res.send('CART NOT SAVED');
    // }
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});


router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.status(200);
  res.send(products);
});

router.get('/products/shop', async (req, res) => {
  const shops = await Shops.find();


  res.status(200);
  res.send(shops);
});

router.get('/products/:id', async (req, res) => {
  const shops = await Shops.find({ product_id: req.params.id });
  res.status(200);
  res.send(shops);
});

router.get('/product/:id', async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  console.log(product);
  res.status(200);
  res.send(product);
});

export default router;
