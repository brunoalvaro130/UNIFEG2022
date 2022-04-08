const mongoose = require('mongoose');

const customerShema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('Customer', customerShema);