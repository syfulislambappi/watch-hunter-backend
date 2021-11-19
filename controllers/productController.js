// depenencies: productModel.js
const Product = require('../models/Product');

// create a new product
exports.createProduct = async (req, res) => {
    const {name, description, price, image} = req.body;
    const productItem = new Product({name, description, price, image})
    
    try {
        const product = await productItem.save();
        res.json({message: 'Product added successfully'});
    } catch(err) {
        res.json(err)
    }
}

// get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch(err) {
        res.json(err)
    }
}

// get a single product
exports.getSingleProduct = async (req, res) => {
    const {id} = req.params;

    try {
        const products = await Product.find({_id: id})
        res.json(products)
    } catch(err) {
        res.json(err)
    }
}

exports.deleteProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const products = await Product.findByIdAndDelete(id)
        res.json(products)
    } catch(err) {
        res.json(err)
    }
}