const mongoose = require('mongoose');
const Product = require('../model/product');

async function run() {
    await mongoose.connect('mongodb://localhost:27017/poc');

    const product = new Product({
        name: 'Caneta Bic Vermelha',
        price: 12.3
    });
    await product.save().then(() => console.log('New product saved'));

    mongoose.connection.close();
}

run().catch((error) => console.log(error.stack));