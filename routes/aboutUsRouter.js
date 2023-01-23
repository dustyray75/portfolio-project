const express = require('express');
const aboutUsRouter = express.Router();

aboutUsRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the information about us to you');
})
.post((req, res) => {
    res.end(`Will add the aboutUS content: ${req.body.name} with description: ${req.body.description}`);
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