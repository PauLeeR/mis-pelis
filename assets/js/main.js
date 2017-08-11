$(document).ready(function() {
    $('.modalito').hide();
	var traerPeliculas = function(data){
		var itemSelect = [];

		var tituliPelicula, year, imagenPelicula, genero, duracion, director, id;
		data.forEach(function(e){
			traerPeliculas = e.show_title;
			year = e.release_year;
			imagenPelicula = '<img class="img-thumbnail" src="'+ e.poster +'">';
			genero = e.category;
			duracion = e.runtime;
			director = e.director;
			//console.log(traerPeliculas + year + imagenPelicula);

			//pluggin que hace los rating de las estrellas
			//$(".rateYo").rateYo({rating: e.rating, starWidth: "25px", ratedFill: "#E74C3C"});

		$("#espacio-peliculas").append('<div class="contenedor-cada-pelicula row" id="'+e.show_id+'">'+
                    '<div class="col-xs-12">'+
                        '<h3>'+traerPeliculas+'</h3><a class="btn-favorito pull-right" href="#">Add Favorite</a>'+ 
                        '<div class="col-xs-2 bg-imagen">'+imagenPelicula+'</div>'+ 
                        '<div class="col-xs-10 col10">'+
                            '<div class="col-xs-6">'+
                                '<span>'+year+' | </span><span>'+genero+'</span><br><span class="red">   <i class="fa fa-television" aria-hidden="true"></i> '+director+'</span><br>'+
                                '<i class="fa fa-clock-o" aria-hidden="true"></i> '+duracion+
                            '</div>'+
                            '<div class="col-xs-6 estrellitas">'+
                                '<div class="rateYo pull-right"></div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>');
        $("#"+e.show_id).click(function() {
            $('.modalito').show();
            $('.modalito').empty();
            $("#espacio-peliculas").append('<div class="modalito">'+
                '<div class="nav-negro"><i class="fa fa-chevron-left cerrar" aria-hidden="true"></i><h3>DETAILS<h3></div>'+
                '<div id="details">'+
                '<div class="row">'+
                '<div class="col-xs-12 movie-pic text-center">'+
                '<img src="'+e.poster+'" alt="">'+
                '</div> '+
                '</div>'+
                '<div class="col-xs-12 movie-watch">'+
                '<h5 class="watch-barra">Watch <i class="fa fa-angle-right" aria-hidden="true"></i></h5>'+
                '</div>'+
                '</div>'+
                '<div class="contenido-pelis">'+
                '<h3>'+traerPeliculas+'</h3>'+
                '<p>'+e.summary+'</p>'+
                '</div>'+
                '</div>');

            $('.cerrar').click(function(){
                $('.modalito').hide();
            })
        });

			//Fav
			$("#espacio-fav").prepend('<div class="item-fav fav-' + e.show_id + '"><img src="' + e.poster + '" class="img-responsive"><div class="text-fav"><p>'+e.show_title+'</p><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div></div>');
			itemSelect.push(genero);

		})

		//Imprimiendo categorias en select
		var uniqueNames = [];
		$.each(itemSelect, function(i, el){
		    if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
		});

    	for(var i = 0; i < uniqueNames.length; i++){
    		$("#espacio-categorias").append("<option value='" + i + "'>" + uniqueNames[i] + "</option>");
    	}
		

    	//Botones echos a la mala u . u (perdon)

		$(".60031219").click(function(){
    		$(".fav-60031219").addClass('mostrar');
    	})
    	$(".425231").click(function(){
    		$(".fav-425231").addClass('mostrar');
    	})
    	$(".60025007").click(function(){
    		$(".fav-60025007").addClass('mostrar')
    	})
    	$(".20159719").click(function(){
    		$(".fav-20159719").addClass('mostrar')
    	})  	
    	$(".492899").click(function(){
    		$(".fav-492899").addClass('mostrar')
    	})
    	$(".70039386").click(function(){
    		$(".fav-70039386").addClass('mostrar')
    	})
    	$(".70242546").click(function(){
    		$(".fav-70242546").addClass('mostrar')
    	})
    	$(".70206627").click(function(){
    		$(".fav-70206627").addClass('mostrar')
    	})
		$(".60034580").click(function(){
    		$(".fav-60034580").addClass('mostrar')
    	})
    	$(".60031289").click(function(){
    		$(".fav-60031289").addClass('mostrar')
    	})
    	$(".70021646").click(function(){
    		$(".fav-70021646").addClass('mostrar')
    	})
    	$(".287348").click(function(){
    		$(".fav-287348").addClass('mostrar')
    	})
    	$(".70043941").click(function(){
    		$(".fav-70043941").addClass('mostrar')
    	})

	}
	function llamadaAjax(){
		$.ajax({
		url: 'https://netflixroulette.net/api/api.php?actor=nicole%20kidman',
		type: 'GET',
		dataType: 'json',
		})
		.done(function(data) {
			console.log("success");
			traerPeliculas(data);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}llamadaAjax()
	

	/*validación de formulario*/
	var correo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	var contra = /^[0-9]+(\.[0-9])?$/;
    /*var minus =   /^[a-z]+$/;*/

	$(".btn-2").click(function(){
        var nombre = $(".nombre").val();        
        var nick = $(".nick").val();
		var email = $(".correo").val();
        var ciudad = $(".pais").val();
        var pass = $(".clave").val();

        if(nombre == "" || nombre == contra){
            $("#mensaje").fadeIn("slow");           
                return false;
        }else{
            $("#mensaje").fadeOut();
            localStorage.setItem('nombre', nombre);
            var nombrePerf = localStorage.getItem('nombre'); 
			$("#nameProfile").html(nombrePerf);
        }

        if(nick == ""){
            $("#mensaje2").fadeIn("slow");
                return false;
        }else{
            $("#mensaje2").fadeOut();
            localStorage.setItem('username', nick);
            var usuarioPerf = localStorage.getItem('username'); 
			$("#usernameProfile").html(usuarioPerf);
	     }

        if(email == "" || !correo.test(email)){
            $("#mensaje3").fadeIn("slow");
                return false;
        }else{
            $("#mensaje3").fadeOut();
            localStorage.setItem('correo', email);
        }

        if(ciudad == ""){
            $("#mensaje4").fadeIn("slow");
                return false;
        }else{
            $("#mensaje4").fadeOut();
            localStorage.setItem('ciudad', ciudad);
            var countryPerf = localStorage.getItem('ciudad'); 
			$("#countryProfile").html(countryPerf);
        }

        if(pass == "" || !contra.test(pass)){
            $("#mensaje5").fadeIn("slow");
                return false;
        }else{
            $("#mensaje5").fadeOut();
            localStorage.setItem('password', pass);
        } 
        return true; 

        nombre = $(".nombre").val(" ");        
        nick = $(".nick").val(" ");
        email = $(".correo").val(" ");
        ciudad = $(".pais").val(" ");
        pass = $(".clave").val(" "); 
    });  

    /*Validacion de LOGIN*/
    $("#btn-login").click(function(){
    	var verificacionUsername = localStorage.getItem('username');
    	var verificacionPass =  localStorage.getItem('password');
    	var userLogin = $("#nombrelogin").val();
    	var passLogin = $("#nicklogin").val();

    	if(verUsuario()){
    		if(verPass()){
    			window.open('movies.html','_self',false);  
    		}
    	}

    	function verUsuario(){
    		if(verificacionUsername != userLogin){
	    		$("#mensajeUser").append('<p class="red">Usuario Invalido</p>');
	    		return false;
	    	} else{
	    		return true;
	    	}
    	}

    	function verPass(){
    		if(verificacionPass != passLogin){
    			$("#mensajePass").append('<p class="red">Contraseña Invalida</p>');
    			return false;
    		} else{
    			return true;
    		}
    	}
    	
    });

    /*navbar de pau*/  
    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    sideslider.click(function(event){
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });
  
  	$(".selLabel").click(function () {  //select de películas
		$('.dropdown').toggleClass('active');
	})

	$(".dropdown-list li").click(function() { 
		$('.selLabel').text($(this).text());
		$('.dropdown').removeClass('active');
		$('.selected-item p span').text($('.selLabel').text());
	});

});


