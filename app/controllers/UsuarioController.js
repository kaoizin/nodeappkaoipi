module.exports = function( app ){

	var Usuario = app.models.usuarios;	

	var UsuarioController = {
		layout : function(req, res){
				   res.render("layout");
		},
		lista: function(req,res){
			Usuario.find({},function(err, data){
				if (err){
					console.log(err);
				}
				res.render("usuario/lista", {pessoas: data});
			});
		},
		create: function(req,res){
			res.render("usuario/create");
		},

		insert: function(request,response){
			var model = new Usuario(request.body);
			model.save(function(err){
				if(err){
					console.log(err);
				}
				Usuario.find({},function(err, data){
				if (err){
					console.log(err);
				}
				res.render("usuario/lista", {pessoas: data});
				});
				//response.redirect('/lista');
			});
		},
		listaJson: function(req,res){
			Usuario.find(function(err, data){
				if (err){
					console.log(err);
				}else{
				res.json(data);
				}
			});
		},
		edit: function(request,response){
			Usuario.findById(request.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
						response.render('usuario/editar', {pessoa: data});
				}
			});
		},

		update: function(request,response){
			Usuario.findById(request.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
						var model  = data;
						model.nome = request.body.nome;
						model.user = request.body.user;
						model.pass = request.body.pass;
						model.cpf  = request.body.cpf;
						model.telefone = request.body.telefone;
						model.email = request.body.email;
						model.save(function(err){
							if(err){
								console.log(err);
							}else{
							  response.redirect('/lista');
							}
						});
				}
			});
		},

		show: function(request,response){
			Usuario.findById(request.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
						response.render('usuarios/detalhes', {value: data});
				}
			});
		},

		remove: function(request,response){
			Usuario.remove({_id: request.params.id}, function(err){
				if (err){
					console.log(err);
				}else{
					//response.redirect('lista');
					response.render('usuario/lista');
				}				
			});
		}
	}

	return UsuarioController;
}