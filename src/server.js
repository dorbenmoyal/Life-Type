let express = require('express'),
path = require('path');
var app = express();
let server = require('http').Server(app);
var port = process.env.PORT || 8000;