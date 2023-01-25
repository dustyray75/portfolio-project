const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const aboutusRouter = require('./routes/aboutusRouter');
const contactRouter = require('./routes/contactRouter');
const faqRouter = require('./routes/faqRouter');
const indexRouter = require('./routes/indexRouter');
const loginRouter = require('./routes/loginRouter');
const membersRouter = require('./routes/membersRouter');
const shopRouter = require('./routes/shopRouter');

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/quinlanscorals';
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

connect.then(() => console.log('Connected correctly to server'), 
    err => console.log(err)
);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/aboutus', aboutusRouter);
app.use('/contact', contactRouter);
app.use('/faq', faqRouter);
app.use('/login', loginRouter);
app.use('/members', membersRouter);
app.use('/shop', shopRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;