const mongoose = require('mongoose');

const productShema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Product', productShema);