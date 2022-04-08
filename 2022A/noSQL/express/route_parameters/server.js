const express = require('express');
const app     = express();

app.use(express.json());

app.post('/', (req, res) => {

    //console.log(req.body);

    const {name, age} = req.body;
    
    res.status(200).json({
        status: 'sussess',
        name,
        age,
        message: 'Hello World by POST'
    });
});

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'sussess',
        message: 'Hello World'
    });
});

app.get('/:id', (req, res) => {

    const paramId = req.params.id;

    res.status(200).json({
        status: 'sussess',
        paramId,
        message: 'Hello World'
    });
});

app.get('/:productId/:id', (req, res) => {

    const paramId = req.params.id;
    const productId = req.params.productId;

    res.status(200).json({
        status: 'sussess',
        ids: {
            paramId,
            productId
        },
        message: 'Hello World'
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});