const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

router.get('/products', async (req, res) => {

  try {
    console.log('Attempting to fetch products...');
    const products = await Product.find({});
    console.log('Products fetched: ', products.length);

    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found' });
    }

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;