var express = require('express');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routers
var indexRouter = require('./routes/index')
app.use('/', indexRouter);

app.listen(3000, () => console.log('Servidor levantado na porta 3000'))

module.exports = app;
