// dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// internal dependencies
const productRoutes = require('./routes/prdouctRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const adminRouter = require('./routes/adminRoutes')

const PORT = process.env.PORT || 8080;
const DBURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@learningnodejs.di3l0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

// middlewares
app.use([express.json(), cors()]);

// routes
app.use('/products', productRoutes);
app.use('/order', orderRoutes);
app.use('/review', reviewRoutes);
app.use('/admin', adminRouter);

app.get('/', (req, res) => {
    res.send('server is running')
})

// connect database
const main = async () => {
    await mongoose.connect(DBURL);
    console.log('database is connected');
}

// create server
app.listen(PORT, () => {
    main().catch(err => console.log(err));
    console.log('server is running on port ' + PORT);
})
