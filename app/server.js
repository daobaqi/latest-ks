var express = require('express');
var app = express();
app.use(express.static('../ks/public'));
require('./route.js').drug(app);


app.listen(2566);