const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
app.set('view engine', 'ejs');
fs = require('fs');
const { check, validationResult } = require('express-validator');
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {

    res.render('home');
    console.log('Request was made: ' + req.url);
});

app.get('/TicTacGame', function (req, res) {

    res.render('TicTac');
    console.log('Request was made: ' + req.url);
});



app.listen(8082, function(){

    console.log("Listening to Port 8082..")
});