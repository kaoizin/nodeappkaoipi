var http = require( "http" );
var express = require( "express" );
var app = require( "./config/express" )(app);
var config = require('./config/config');

http.createServer( app ).listen( config.port, function() {
    console.log('Express Http Server ' +
        config.address + ' escutando na porta ' + config.port);
});

var mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect('mongodb://localhost/nodeapppikaoi', function(err){
=======
mongoose.connect('mongodb://kaoi7periodo:kaoi7periodo@ds041651.mongolab.com:41651/nodeapppikaoi', function(err){
>>>>>>> 6397c4541f52e823966a6cd474b65acbf7e74cae
  if (err){
    console.log('Erro ao conectar no mongodb: '+err);
  }else{
	console.log('Mongo conectado com sucesso');
  }
});

