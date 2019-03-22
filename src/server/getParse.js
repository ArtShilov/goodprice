const fetch = require('node-fetch');
const mongoose = require('mongoose');
const Product = require('./models/product');
const Shops = require('./models/shops');

const db = mongoose.connect(
  'mongodb://localhost:27017/goodPrice',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);

const getFromParser = async () => {
  try {
    console.log('started');
    // debugger;
    const products = await fetch('https://api.priceva.com/api/v1/product/list', {
      method: 'POST',
      headers: { Apikey: 'lK8nk2JQdQOK4bkv4ImomBhxMWKSG2X6' },
      body: JSON.stringify({
        params: {
          filters: {
            page: 1,
            limit: 100,
            client_code: [
              '1'
            ]
          },
          sources: {
            add: true,
            add_term: true
          }
        }
      })
    });
    // console.log(products);
    const productsObj = await products.json();
    // console.log(productsObj);
    for (const item of productsObj.result.objects) { // eslint-disable-line
      const test = await Product.findOne({ name: item.name }); // eslint-disable-line
      console.log(test);
      if (test === null) {
        const product = new Product({
          name: item.name,
          rating: 5,
          lastSync: Date.now()
        });
        await product.save(); // eslint-disable-line
        const savedProduct = await Product.findOne({ name: item.name }); // eslint-disable-line
        console.log(savedProduct);
      for (const shopItem of item.sources) { // eslint-disable-line
          const shop = new Shops({
            name: shopItem.company_name,
            price: shopItem.price,
            presence: shopItem.in_stock,
            lastUpdate: shopItem.date,
          product_id: savedProduct._id, // eslint-disable-line
            link: shopItem.url
          });
          shop.save();
        }
      }
    }
  } catch (e) {
    console.error(e);
  }
};


// getFromParser();


const setLowerPrice = async () => {
  const products = await Product.find();
  for (const item of products) { // eslint-disable-line
    const shops = await Shops.find({ product_id: item._id });
    let lowPrice = 0;
    for (const shopItem of shops) { // eslint-disable-line
      if (shopItem.price > lowPrice) {
        lowPrice = shopItem.price;
      }
    }
    await Product.findOneAndUpdate({ _id: item._id }, { lowPrice }); // eslint-disable-line
    const savedProduct = await Product.findOne({ name: item.name }); // eslint-disable-line
  }
};


setLowerPrice();
