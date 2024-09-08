const express = require('express');
const path = require('path');
const app = new express();
app.use(express.static('dist'));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.sendFile( "index.html" );
})
app.listen(3000);
