const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the FAQs to you');
})
.post((req, res) => {
    res.end(`Will add the FAQ: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /faq');
})
.delete((req, res) => {
    res.end('Deleting all FAQs');
});


module.exports = campsiteRouter;