var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



app.listen(8000, function(){

    console.log('Listening on port 8000...');

});


app.use(express.static(__dirname + '/public'));