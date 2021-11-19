const {Schema, model} = require('mongoose');

  const productSchema = new Schema({
    name:  String,
    description: String,
    price: String,
    image:   String,
    date: { type: Date, default: Date.now }
  });

const Product = model('Product', productSchema);

module.exports = Product;