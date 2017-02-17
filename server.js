'use strict'
var express  = require('express');
var app      = express();                     // Utilizamos express
var mongoose = require('mongoose');
const bodyParser = require('body-parser')
var http = require('http');
var server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Cargamos los endpoints
require('./app/routes.js')(app);

mongoose.connect('mongodb://localhost:27017/test',(err, res) =>{
	if (err) {
  return console.log(`Error al conectar a la base de datos: ${err}`)
}
	console.log('Conexion a la base de datos establecida...')
	app.listen(3001, function () {
	console.log('listening on port 3001');
	});
})
