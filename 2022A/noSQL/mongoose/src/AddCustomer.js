const mongoose = require('mongoose');
const Customer = require('./model/customer');

async function run() {
    await mongoose.connect('mongodb://localhost:27017/poc');

    const customer = new Customer({ 
        name: 'Paula Eduarda',
        email: 'peduarda@email.com'
    });
    await customer.save().then(() => console.log('New customer saved'));

    mongoose.connection.close();
}

run().catch((error) => console.log(error.stack));