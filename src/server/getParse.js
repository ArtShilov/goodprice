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

let i = 0;
const images = ['https://www.perekrestok.ru/src/product.file/full/image/18/32/43218.jpeg',
  'https://www.perekrestok.ru/src/product.file/full/image/67/58/75867.jpeg',
  'https://www.perekrestok.ru/src/product.file/full/image/61/45/54561.jpeg',
  'https://www.perekrestok.ru/src/product.file/full/image/65/61/76165.jpeg',
  'https://www.perekrestok.ru/src/product.file/full/image/30/18/91830.jpeg',
  'https://www.utkonos.ru/resample/900x900q80/images/photo/3288/3288600H.jpg',
  'https://www.utkonos.ru/images/photo/3118/3118766H.jpg',
  'https://www.perekrestok.ru/src/product.file/full/image/71/21/12171.jpeg',
  'https://www.perekrestok.ru/src/product.file/full/image/47/96/89647.jpeg',
  'https://www.perekrestok.ru/src/product.file/full/image/77/37/83777.jpeg'
];


const getFromParser = async () => {
  try {
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
    const productsObj = await products.json();
    for (const item of productsObj.result.objects) { // eslint-disable-line
      const test = await Product.findOne({ name: item.name }); // eslint-disable-line
      if (test === null) {
        const product = new Product({
          name: item.name,
          rating: 5,
          lastSync: Date.now(),
          img: images[i]
        });
        i += 1;
        await product.save(); // eslint-disable-line
      }
        const savedProduct = await Product.findOne({ name: item.name }); // eslint-disable-line
      for (const shopItem of item.sources) { // eslint-disable-line
        const testShop = await Shops.findOne({ name: shopItem.company_name });
        if (testShop === null) {
          const shop = new Shops({
            name: shopItem.company_name,
            price: shopItem.price,
            presence: shopItem.in_stock,
            lastUpdate: shopItem.date,
          product_id: savedProduct._id, // eslint-disable-line
            link: shopItem.url
          });
          shop.save();
        } else if ((testShop.price !== shopItem.price) || (testShop.presence !== shopItem.in_stock)) {
          Product.findOneAndUpdate({ _id: testShop._id }, { price:shopItem.price, presence:shopItem.in_stock  }); // eslint-disable-line
        }
      }
    }
  } catch (e) {
    console.error(e);
  }
};


getFromParser();


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
    Product.findOneAndUpdate({ _id: item._id }, { lowPrice }); // eslint-disable-line
  }
};


setLowerPrice();
