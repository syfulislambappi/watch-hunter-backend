const { createProduct, getAllProducts, getSingleProduct, deleteProduct } = require('../controllers/productController');

// dependencies
const router = require('express').Router();

// methods
router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);
router.delete('/:id', deleteProduct);


module.exports = router;