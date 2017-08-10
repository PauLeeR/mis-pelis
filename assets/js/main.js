$(document).ready(function(){ 

	/*validación de formulario*/
	var correo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	var contra = /^[0-9]+(\.[0-9])?$/;
    var minus =   /^[a-z]+$/;

	$(".btn-2").click(function(){
        var nombre = $(".nombre").val();
        var nick = $(".nick").val();
		var email = $(".correo").val();
        var ciudad = $(".pais").val();
        var pass = $(".clave").val();

        if(nombre == ""){
            $("#mensaje").fadeIn("slow");
            console.log(nombre);
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

        if(ciudad == "" || ciudad == Number){
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

    });    

})