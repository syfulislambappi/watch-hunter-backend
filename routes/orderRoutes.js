const { createOrder, getOrders, deleteOrder, updateOrderStatus } = require('../controllers/orderController');

// dependencies
const router = require('express').Router();


// blog post method
router.post('/', createOrder);
router.get('/', getOrders);
router.delete('/:id', deleteOrder);
router.put('/:id', updateOrderStatus);


module.exports = router;