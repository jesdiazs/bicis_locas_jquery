function crearSpan(mensaje) {
    var span = document.createElement("span");
    var texto = document.createTextNode(mensaje);
    span.appendChild(texto);
    return span;
}

function validateForm(){
    var nombre = document.getElementById('name').value;
    var apellido = document.getElementById('lastname').value;
    var correo = document.getElementById('name').value;
    var password = document.getElementById('input-password').value;
    var seleccionBici =document.querySelector('select').value;
   
    function validaName(){
        if(nombre== null || nombre.length== 0|| /[0-9]/.test(nombre)){
            var span=crearSpan("Debe escribir el nombre ingresando solo letras");
            document.getElementsByClassName("name-container")[0].appendChild(span);

        }else if(nombre.charAt(0)!= nombre.charAt(0).toUpperCase()){
            var span=crearSpan("Debe comenzar la inicial del nombre en mayuscula");
            document.getElementsByClassName("name-container")[0].appendChild(span);
        }
    }
    validaName();

    function validaApellido(){
        if(apellido== null || apellido.length== 0|| /[0-9]/.test(apellido)){
            var span=crearSpan("Debe escribir el apellido ingresando solo letras");
            document.getElementsByClassName("lastname-container")[0].appendChild(span);

        }else if(apellido.charAt(0)!= apellido.charAt(0).toUpperCase()){
            var span=crearSpan("Debe ingresar la inicial de su apellido en mayuscula");
            document.getElementsByClassName("lastname-container")[0].appendChild(span);
        }
    }
    validaApellido();

    function validaPassword(){
        if(password== null || password.length< 6|| /[0-9]/.test(password)){
            var span=crearSpan("Debe ingresar un password de seis digitos");
            document.getElementsByClassName("form-group")[0].appendChild(span);
        }else if(password=="password" || password=="123456" || password=="098754" ){
            var span=crearSpan("Debe ingresar un password mas seguro");
            document.getElementById("input-password").parentNode.appendChild(span);  
        }
    }
    validaPassword();

    function validaCorreo(){
        if(!(/\S+@\S+\.\S+/.test(correo))){
            var span=crearSpan("Debe ingresar un correo valido");
            document.getElementsByClassName("email-container")[0].appendChild(span);
        }
    }
    validaCorreo();

    function validarSeleccion(){
        if(seleccionBici=="0"){
            var span=crearSpan("Debe seleccionar una bicicleta");
            document.getElementsByTagName("select")[0].parentNode.appendChild(span);
        }
    }
    validarSeleccion();
}


