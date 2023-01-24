const express = require('express');
const AboutUs = require('../models/aboutus');

const aboutUsRouter = express.Router();

aboutUsRouter.route('/')
.get((req, res, next) => {
    AboutUs.find()
    .then(aboutus => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(aboutus);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /aboutUs');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /aboutUs');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /aboutUs');
});


module.exports = aboutUsRouter;