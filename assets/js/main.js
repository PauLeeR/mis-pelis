
$(document).ready(function() {
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

			$("#espacio-peliculas").append('<div class="contenedor-cada-pelicula row">'+
					'<div class="col-xs-12">'+

						'<h4 class="pull-left">'+traerPeliculas+'</h4><a class="btn-favorito pull-right ' + e.show_id + '" href="#">Add Favorite</a>'+ 
					'</div>'+
					'<div class="col-xs-12">'+
						'<div class="col-xs-3 bg-imagen">'+imagenPelicula+'</div>'+ 
						'<div class="col-xs-9 col10">'+
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
	

});