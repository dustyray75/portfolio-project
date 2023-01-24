const express = require('express');
const FAQ = require('../models/faq');

const faqRouter = express.Router();

faqRouter.route('/')
.get((req, res, next) => {
    FAQ.find()
    .then(faq => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(faq);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    FAQ.create(req.body)
    .then(faq => {
        console.log('FAQ Created ', faq);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(faq);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /faq');
})
.delete((req, res, next) => {
    FAQ.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});


module.exports = faqRouter;