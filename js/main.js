
function validateForm(){
    var nombre = $('#name').val();
    var apellido = $('#lastname').val();
    var correo = $('#input-email').val();
    var password = $('#input-password').val();
    var seleccionBici = $('select').val();
   
    function validaName(){
        if(nombre== null || nombre.length== 0|| /[0-9]/.test(nombre)){
            var span=("<span>Debe escribir el nombre ingresando solo letras</span>");
            $(".name-container").append(span);

        }else if(nombre.charAt(0)!= nombre.charAt(0).toUpperCase()){
            var span=("<span>Debe comenzar la inicial del nombre en mayuscula</span>");
            $(".name-container").append(span);
        }
    }
    validaName();

    function validaApellido(){
        if(apellido== null || apellido.length== 0|| /[0-9]/.test(apellido)){
            var span=("<span>Debe escribir el apellido ingresando solo letras</span>");
            $(".lastname-container").append(span);

        }else if(apellido.charAt(0)!= apellido.charAt(0).toUpperCase()){
            var span= ("<span>Debe ingresar la inicial de su apellido en mayuscula</span>");
            $(".lastname-container").append(span);
        }
    }
    validaApellido();

    function validaPassword(){
        if(password== null || password.length< 6|| /[0-9]/.test(password)){
            var span= ("<span>Debe ingresar un password de seis digitos</span>");
            $("#input-password").parent().append(span);
        }else if(password=="password" || password=="123456" || password=="098754" ){
            var span= ("<span>El password no puede ser igual a password o 123456 o 098754</span>");
            $("#input-password").parent().append(span);  
        }
    }
    validaPassword();

    function validaCorreo(){
        if(!(/\S+@\S+\.\S+/.test(correo))){
            var span= ("<span>Debe ingresar un correo valido</span>");
            $(".email-container").append(span);
        }
    }
    validaCorreo();

    function validarSeleccion(){
        if(seleccionBici=="0"){
            var span= ("<span>Debe seleccionar una bicicleta</span>");
            $("select").parent().append(span);
        }
    }
    validarSeleccion();
}


