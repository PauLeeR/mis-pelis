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
						'<h4 class="pull-left">'+traerPeliculas+'</h4><a class="btn-favorito pull-right" href="#">Add Favorite</a>'+ 
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
				'</div>')
			itemSelect.push(genero);
		})

		//Imprimiendo categorias en select
		var uniqueNames = [];
		$.each(itemSelect, function(i, el){
		    if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
		});
		var contadorSelect = 0;
    	//console.log(uniqueNames);
    	for(var i = 0; i < uniqueNames.length; i++){
    		$("#espacio-categorias").append("<option value='" + i + "'>" + uniqueNames[i] + "</option>");
    	}
		
		if($("#espacio-categorias").val() == 1){ //Deberia que cuando el select vale 1 mostrar una categoria de peliculas pero no me muestra cuando cambia el valor
		    	for(var i = 0; i < $(".categoria").length; i++ ){
		    		if($(".categoria")[i].innerText == "Dramas"){
		    			$("#espacio-peliculas").append($(".categoria").parent()[i])
		    		
		 }}
		 }

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