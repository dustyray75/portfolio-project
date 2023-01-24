const express = require('express');
const Shop = require('../models/shop');

const shopRouter = express.Router();

shopRouter.route('/')
.get((req, res, next) => {
    Shop.find()
    .then(items => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(items);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Shop.create(req.body)
    .then(item => {
        console.log('Shop Created ', item);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(item);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /shop');
})
.delete((req, res, next) => {
    Shop.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});


module.exports = shopRouter;