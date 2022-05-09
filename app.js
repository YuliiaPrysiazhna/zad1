const express = require('express');
const app = express();

const path = __dirname + '/views/';
const port = 8080;

app.use(express.static(path));

app.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

app.listen(port, function () {
  console.log('Aplikacja działa na porcie 8080!')
  console.log('Author: Yuliia Prysiazhna')
})