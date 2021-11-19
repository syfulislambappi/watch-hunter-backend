const {Schema, model} = require('mongoose');

  const orderSchema = new Schema({
    name:  String,
    email: String,
    mobile: String,
    productName: String,
    price: String,
    address: String,
    image:   String,
    status: {
        type: String,
        enum: ['Delivering', 'Delivered'],
        default: 'Delivering'
    },
    date: { type: Date, default: Date.now }
  });

const Order = model('Order', orderSchema);

module.exports = Order;