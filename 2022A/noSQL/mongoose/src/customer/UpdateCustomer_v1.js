const mongoose = require('mongoose');
const Customer = require('./model/customer');

async function run() {
    await mongoose.connect('mongodb://localhost:27017/poc');

    const customer = await Customer.findOne({ 
        email: 'peduarda@email.com'
    });

    if (customer) {
        customer.name = 'Paula Custodia';
        customer.phone = '35 9 8888 8888';

        await customer.save().then(() => console.log('Updated customer data'));
    } else {
        console.log('Error: Customer not found');
    }
    

    mongoose.connection.close();
}

run().catch((error) => console.log(error.stack));