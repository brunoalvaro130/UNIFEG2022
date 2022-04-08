const mongoose = require('mongoose');
const Customer = require('./model/customer');

async function run() {
    await mongoose.connect('mongodb://localhost:27017/poc');

    const customer = await Customer.findOne({ 
        email: 'peduarda@email.com'
    });

    if (customer) {
        console.log(customer);
    } else {
        console.log('Error: Customer not found');
    }
    

    mongoose.connection.close();
}

run().catch((error) => console.log(error.stack));