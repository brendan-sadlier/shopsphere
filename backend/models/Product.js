const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  isInStock: Boolean,
  gender: String,
  category: String,
  availableSizes: [Number],
  rating: Number,
  totalReviewCount: Number,
  productionDate: Date,
  price: {
    current: {
      value: Number,
      currency: String
    }
  },
  brandName: String,
  productCode: Number,
  imageUrl: String,
  additionalImageUrls: [String]
});

const Product = mongoose.model('Product', ProductSchema, "products");
module.exports = Product;