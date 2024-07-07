// app.js
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');

const http = require('http');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  return res.status(200).json({data: 'Hello World!', method: 'GET'});
})

app.post('/', (req, res) => {
  return res.status(201).json({data: 'Hello World!', method: 'POST'});
})

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  return res.status(err.status || 500).render('error');
});

const server = http.createServer(app);
server.listen(8080);