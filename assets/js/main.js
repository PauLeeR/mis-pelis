$(document).ready(function(){ 

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

})