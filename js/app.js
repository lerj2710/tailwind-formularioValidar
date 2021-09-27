//===== variables=====
const btnEnviar = document.querySelector('#enviar');
//variables de los campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

//====== evento =======
eventListener();
function eventListener() {
    // Iniciar ó cargar la App
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //campos del formulario
    email.addEventListener('blur', validarFormulario);// recoradar blur me funciona para cuando quiera salir de un formulario no este vacio
    asunto.addEventListener('blur', validarFormulario);// recoradar blur me funciona para cuando quiera salir de un formulario no este vacio
    mensaje.addEventListener('blur', validarFormulario);// recoradar blur me funciona para cuando quiera salir de un formulario no este vacio
}

//======== funciones =========

function iniciarApp() {
btnEnviar.disabled = true;
btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}


function validarFormulario(e){// validar que no este vacio el formulario
    if(e.target.value.length > 0){
        e.target.classList.add('border-green-500','border');
    }else{
        e.target.classList.add('border-red-500','border');
    }
}