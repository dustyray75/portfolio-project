const express = require('express');
const membersRouter = express.Router();

membersRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the members information to you');
})
.post((req, res) => {
    res.end(`Will add the member: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /members');
})
.delete((req, res) => {
    res.end('Deleting all members');
});


module.exports = membersRouter;