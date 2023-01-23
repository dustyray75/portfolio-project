const express = require('express');
const contactRouter = express.Router();

contactRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the contact information to you');
})
.post((req, res) => {
    res.end(`Will add the contact information: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /contact');
})
.delete((req, res) => {
    res.end('Deleting all contact information');
});


module.exports = contactRouter;