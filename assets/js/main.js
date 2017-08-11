$(document).ready(function() {   //barra toggle header
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