const btn = document.getElementById("btnEnviar");
let txtNombre = document.getElementById("from_name");
let txtAsunto = document.getElementById("from_asunto");
let email = document.getElementById("from_email");
let txtNumber = document.getElementById("from_telefono");
let mensaje = document.getElementById("from_message");

function validarNombre(){
    if( txtNombre.value == null || txtNombre.value == 0 ||(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(txtNombre.value))) { 
        return false;
    }
    return true;
}//validarNombre

function validarAsunto(){
    if( txtAsunto.value == null || txtAsunto.value == 0) { 
        return false;
    }
    return true;
}//validarAsunto

function validarCorreo(){
    let validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (! validEmail.test(email.value)){
        return false;
    }
    return true;
}//validarCorreo

function telefono(){
    if( !(/^[1-9]\d*$/.test(txtNumber.value))){ 
        return false;
    }
    return true;
}//funcion telefono

function validarMensaje(){
    if (mensaje.value==0){
        return false;
    }//mensaje 0
    return true;
}//validarMensaje

document.getElementById('form')
.addEventListener('submit',function(event){
    let isValid = true;
    event.preventDefault();
    txtNombre.style.border="solid thin #94AF70";
    txtAsunto.style.border="solid thin #94AF70";
    email.style.border="solid thin #94AF70";
    txtNumber.style.border="solid thin #94AF70";
    mensaje.style.border="solid thin #94AF70";
    

    if (! validarMensaje()){
        Swal.fire({
            position: "center",
            icon: "warning",
            title: 'Escribe tu mensaje',
            text: 'Por favor no olvides escribir el mensaje de tu correo para saber qué necesitas.',
            color: "#ffffff",
            background: "#9c9c9c",
            showConfirmButton: false,
            timer: 1800
          });
        mensaje.style.border="solid thin #eb6111";
        isValid = false;
    }//If validarMensaje

    if (! telefono()){
        Swal.fire({
            position: "center",
            icon: "warning",
            title: 'Necesito tu número de teléfono',
            text: 'Por favor escribe tu teléfono con 10 dígitos, gracias.',
            color: "#ffffff",
            background: "#9c9c9c",
            showConfirmButton: false,
            timer: 2200
          });
        txtNumber.style.border="solid thin #eb6111";
        isValid = false;
    }//telefono

    if (! validarCorreo()){
        Swal.fire({
            position: "center",
            icon: "warning",
            title: 'Necesito tu correo porfavor',
            text: 'Por favor escribe tu correo en el formato tu_correo@dominio.com para responderte, gracias.',
            color: "#ffffff",
            background: "#9c9c9c",
            showConfirmButton: false,
            timer: 2200
          });
        email.style.border="solid thin #eb6111";
        isValid = false;
    }//If txtNombre <3*/
    
    if (! validarAsunto()){
        Swal.fire({
            position: "center",
            icon: "warning",
            title: '¿Asunto...',
            text: 'y la risa?.',
            color: "#ffffff",
            background: "#9c9c9c",
            showConfirmButton: false,
            timer: 2200
          });
        txtAsunto.style.border="solid thin #eb6111";
        isValid = false;
    }//Nombre

    if (! validarNombre()){
        Swal.fire({
            position: "center",
            icon: "warning",
            title: '¿Cómo te llamas?',
            text: 'Por favor escribe tu nombre para conocerte.',
            color: "#ffffff",
            background: "#9c9c9c",
            showConfirmButton: false,
            timer: 2200
          });
        txtNombre.style.border="solid thin #eb6111";
        isValid = false;
    }//Nombre

    let completo = ((validarNombre())+(validarAsunto())+(telefono())+(validarCorreo())+(validarMensaje()));
    if (!completo){
        Swal.fire({
            position: "center",
            icon: "warning",
            title: 'Estás enviando nada',
            text: 'Por favor llena todos los campos antes de enviar',
            color: "#ffffff",
            background: "#9c9c9c",
            confirmButtonColor: "#ffa5718c",
            confirmButtonText: '¡Cierto! oops.'
          });
    }//Incompleto

    if (isValid){
        emailjs.init('T643-i9oIY8lWO-Ud');

        btn.value = 'Sending...';
        const serviceID = 'default_service';
        const templateID = 'template_Portafolio';
     
        emailjs.sendForm(serviceID, templateID, this)
         .then(() => {
           btn.value = 'Send Email';
           Swal.fire({
            position: "center",
            icon: "success",
            title: '¡Correo Enviado!',
            text: 'Pronto me pondré en contacto contigo, ¡gracias!',
            color: "#ffffff",
            background: "#9c9c9c",
            confirmButtonColor: "#a9d66f",
            confirmButtonText: '¡Super! hasta pronto'
          });
         }, (err) => {
           btn.value = 'Send Email';
           alert(JSON.stringify(err));
         });

        txtNombre.value="";
        txtAsunto.value="";
        email.value="";
        txtNumber.value="";
        mensaje.value="";

        txtNombre.style.border="";
        txtAsunto.style.border="";
        email.style.border="";
        txtNumber.style.border="";
        mensaje.style.border="";
        }//isValid

});//btnEnviar