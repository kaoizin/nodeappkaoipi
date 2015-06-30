var http = require( "http" );
var express = require( "express" );
var app = require( "./config/express" )(app);
var config = require('./config/config');

http.createServer( app ).listen( config.port, function() {
    console.log('Express Http Server ' +
        config.address + ' escutando na porta ' + config.port);
});

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodeapppikaoi', function(err){
//mongoose.connect('mongodb://kaoizin:Felipe16@ds047732.mongolab.com:47732/nodeappkaoipi', function(err){
  if (err){
    console.log('Erro ao conectar no mongodb: '+err);
  }else{
	console.log('Mongo conectado com sucesso');
  }
});

