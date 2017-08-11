$(document).ready(function(){ 

	/*validación de formulario*/
	var correo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	var contra = /^[0-9]+(\.[0-9])?$/;
    /*var minus =   /^[a-z]+$/;*/ arroja problemas usando esta variable.

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
        }

        if(nick == ""){
            $("#mensaje2").fadeIn("slow");
                return false;
        }else{
            $("#mensaje2").fadeOut();
        }

        if(email == "" || !correo.test(email)){
            $("#mensaje3").fadeIn("slow");
                return false;
        }else{
            $("#mensaje3").fadeOut();
        }

        if(ciudad == ""){
            $("#mensaje4").fadeIn("slow");
                return false;
        }else{
            $("#mensaje4").fadeOut();
        }

        if(pass == "" || !contra.test(pass)){
            $("#mensaje5").fadeIn("slow");
                return false;
        }else{
            $("#mensaje5").fadeOut();
        } 
        return true;   

        nombre = $(".nombre").val(" ");        
        nick = $(".nick").val(" ");
        email = $(".correo").val(" ");
        ciudad = $(".pais").val(" ");
        pass = $(".clave").val(" ");  
    });  

    /*navbar de pau*/  
    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    sideslider.click(function(event){
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });

})