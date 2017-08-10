$(document).ready(function() {
	var traerPeliculas = function(data){
		var tituliPelicula, year, imagenPelicula, genero, duracion, director;
		data.forEach(function(e){
			traerPeliculas = e.show_title;
			year = e.release_year;
			imagenPelicula = '<img src="'+ e.poster +'">';
			genero = e.category;
			duracion = e.runtime;
			director = e.director;
			console.log(traerPeliculas + year + imagenPelicula);

			$("#espacio-peliculas").append('<div class="contenedor-cada-pelicula">'+
				'<h4>'+traerPeliculas+'</h4><span>'+year+'</span><span>'+genero+'</span>'+
				imagenPelicula+
				'<span class="red"><i class="fa fa-clock-o" aria-hidden="true"></i> '+duracion+' <i class="fa fa-television" aria-hidden="true"></i></span>'+
				'</div>')
		})
	}
	function llamadaAjax(){
		$.ajax({
		url: 'https://netflixroulette.net/api/api.php?actor=Liam%20Cunningham',
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