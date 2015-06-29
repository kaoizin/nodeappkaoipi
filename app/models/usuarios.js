module.exports = function(){
  var mongoose = require('mongoose');
  var Schema   = mongoose.Schema;

  var pessoa = new Schema({
    nome:String,
	cpf:String,
	telefone:String,
	email:String,
	user:String,
	pass:String
	
  });

  return mongoose.model('cadusuario', pessoa);
}