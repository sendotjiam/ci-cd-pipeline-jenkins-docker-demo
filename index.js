var express = require('express');
var app = express();

var Products = require('./product.json');

app.get('/', (req, res) => {
	res.send('simple rest app');
});

app.get('/products', (req, res) => {
	res.json(Products);
});

app.get('/product/:id', (req, res) => {
	res.json(
		Products.find((product) => {
			return req.params.id === product.id;
		}),
	);
});

app.listen(5000, () => {
	console.log('Server is running on port 5000');
});
