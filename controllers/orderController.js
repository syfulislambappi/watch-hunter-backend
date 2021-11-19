// dependencies
const Order = require('../models/Order')

// create blog
exports.createOrder = async (req, res) => {
    const {name, email, mobile, productName, price, address, image} = req.body;
    const orderItem = new Order({name, email, mobile, productName, price, address, image})
    
    try {
        const order = await orderItem.save();
        res.json({message: 'Watch is ordered successfully'});
    } catch(err) {
        res.json(err)
    }
}

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
        res.json(orders)
    } catch(err) {
        res.json(err)
    }
}

exports.deleteOrder = async (req, res) => {
    const {id} = req.params;
    try {
        const products = await Order.findByIdAndDelete(id)
        res.json({message: 'Order is rejected'})
    } catch(err) {
        res.json(err)
    }
}

exports.updateOrderStatus = async (req, res) => {
    const {id} = req.params;
    try {
        const products = await Order.findByIdAndUpdate(id, {status: 'Delivered'})
        res.json({message: 'Order status is updated'})
    } catch(err) {
        res.json(err)
    }
}