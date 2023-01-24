const express = require('express');
const Login = require('../models/login');

const loginRouter = express.Router();

loginRouter.route('/')
.get((req, res, next) => {
    Login.find()
    .then(login => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(login);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Login.create(req.body)
    .then(login => {
        console.log('Login Created ', login);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(login);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /login');
})
.delete((req, res) => {
    Login.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});


module.exports = loginRouter;