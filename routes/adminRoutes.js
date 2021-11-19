const { getAdmin, logOutAdmin, logInAdmin, makeAdmin } = require('../controllers/adminController');

// dependencies
const router = require('express').Router();


// blog post method
router.get('/', getAdmin);
router.post('/', makeAdmin);
router.put('/', logOutAdmin);
router.put('/login', logInAdmin);


module.exports = router;