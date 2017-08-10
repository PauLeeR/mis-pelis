$(document).ready(function() {
	var traerPeliculas = function(data){
		var tituliPelicula, year, imagenPelicula;
		data.forEach(function(e){
			traerPeliculas = e.show_title;
			year = e.release_year;
			imagenPelicula = '<img src="'+ e.poster +'">';
			console.log(traerPeliculas + year + imagenPelicula);
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