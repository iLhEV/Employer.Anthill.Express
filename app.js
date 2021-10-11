// Create app with this tutorial https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#using_asynchronous_apis

const express = require('express');
const logger = require('morgan');
const app = express();
const port = 3333;
const wiki = require('./wiki.js');
const square = require('./square');

app.use(logger('dev'));
app.use('/wiki', wiki);
app.get('/', (req, res) => {
  //res.send(`Hello World!!! square: ` + square.area(10))
  res.json({user: 'toby'});
});

app.all('/hi', (req, res, next) => {
  //res.send(`Hello World!!! square: ` + square.area(10))
  res.json({user: 'hi answer'});
  next()
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

setTimeout(function() {
  console.log('First');
  }, 3000);
console.log('Second');