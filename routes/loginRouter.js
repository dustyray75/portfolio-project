const express = require('express');
const loginRouter = express.Router();

loginRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the login information to you');
})
.post((req, res) => {
    res.end(`Will add the new login information: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /login');
})
.delete((req, res) => {
    res.end('Deleting all login information');
});


module.exports = loginRouter;