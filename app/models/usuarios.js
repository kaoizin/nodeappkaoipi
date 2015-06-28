module.exports = function(){
  var mongoose = require('mongoose');
  var Schema   = mongoose.Schema;

  var pessoa = new Schema({
    nome: String,
  });

  return mongoose.model('Pessoa', pessoa);
}