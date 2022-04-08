const mongoose = require('mongoose');


async function run() {
    mongoose.connect('mongodb://localhost:27017/poc');
    
    const Customer = mongoose.model('Customer', { name: String });

    const jose = new Customer({ name: 'Jose Maria' });
    await jose.save().then(() => console.log('New customer saved'));

    mongoose.connection.close();
}

run().catch((error) => console.log(error.stack));
