const express = require('express');
const Member = require('../models/members');

const membersRouter = express.Router();

membersRouter.route('/')
.get((req, res, next) => {
    Member.find()
    .then(members => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(members);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Member.create(req.body)
    .then(member => {
        console.log('Member Created ', member);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(member);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /members');
})
.delete((req, res, next) => {
    Member.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});


module.exports = membersRouter;