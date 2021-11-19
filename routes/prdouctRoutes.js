const { createProduct, getAllProducts, getSingleProduct } = require('../controllers/productController');

// dependencies
const router = require('express').Router();

// methods
router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);
// router.delete('/:id', deleteItem);


module.exports = router;