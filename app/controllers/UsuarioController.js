module.exports = function( app ){

	var Usuario = app.models.usuarios;
	

	var UsuarioController = {
		layout : function(req, res){
				   res.render("layout");
		},
		lista: function(req,res){
			Usuario.find(function(err, data){
				if (err){
					console.log(err);
				}
				res.render("usuario/lista", {pessoas: data});
				//res.render("usuario/lista");
			});
		},
		teste: function(req,res){
				res.render("usuario/lista");
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
				request.flash('info','Usuário cadastrado com sucesso!');
				response.redirect('/');
			});
		},
		lista: function(req,res){
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
						response.render('/editar', {value: data});
				}
			});
		},

		update: function(request,response){
			Usuario.findById(request.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
						var model   = data;
						model.nome  = request.body.nome;
						model.login = request.body.login;
						model.save(function(err){
							if(err){
								console.log(err);
							}else{
								request.flash('info', 'Usuário atualizado com sucesso!');
							  response.redirect('/usuarios');
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
					request.flash('info', 'Usuário excluído com sucesso!');
					response.redirect('/usuarios');
				}
			});
		}
	}

	return UsuarioController;
}