const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Field nama Harus ada "],
    minlength: 3,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 1000,
    maxlength: 1000000,
  },
  stock: Number,
  status: {
    type: Boolean,
    default: true,
    },
    image_url: {
        type: String,
  }
});
const Product = mongoose.model('product-mongoose',ProductSchema);
module.exports = Product;