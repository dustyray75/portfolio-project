const express = require('express');
const Contact = require('../models/contact');

const contactRouter = express.Router();

contactRouter.route('/')
.get((req, res, next) => {
    Contact.find()
    .then(contact => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(contact);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Contact.create(req.body)
    .then(contact => {
        console.log('Contact Created ', contact);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(contact);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /contact');
})
.delete((req, res, next) => {
    Contact.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});


module.exports = contactRouter;