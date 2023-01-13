const express = require('express');
const morgan = require('morgan');
const homeRouter = require('./routes/homeRouter');
const shopRouter = require('./routes/shopRouter');
const membersRouter = require('./routes/membersRouter');
const aboutUsRouter = require('./routes/aboutUsRouter');
const faqRouter = require('./routes/faqRouter');
const contactRouter = require('./routes/contactRouter');
const loginRouter = require('./routes/loginRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/home', homeRouter)
app.use('/shop', shopRouter)
app.use('/members', membersRouter)
app.use('/aboutUs', aboutUsRouter)
app.use('/faq', faqRouter)
app.use('/contact', contactRouter)
app.use('/login', loginRouter)

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});