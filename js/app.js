//===== variables=====
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
//variables de los campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
    //expresion regular
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
        //  Elimina los errores
        const error = document.querySelector('p.error');
        if(error){
            error.remove(); 
        }
        e.target.classList.remove('border-red-500','border');
        e.target.classList.add('border-green-500','border');
    }else{
        e.target.classList.remove('border-green-500','border');
        e.target.classList.add('border-red-500','border');

            mostrarError('todos los campos son obligatorio');
    }
    if(e.target.type === 'email'){
            // const resultado = e.target.value.indexOf('@'); //validacion regular
        if(er.test(e.target.value)){            
             //  Elimina los errores
                const error = document.querySelector('p.error');
                if(error){
                    error.remove(); 
                };
            e.target.classList.remove('border-red-500','border');   
            e.target.classList.add('border-green-500','border');    
        }else{
            e.target.classList.remove('border-green-500','border');
            e.target.classList.add('border-red-500','border');
            mostrarError('Email no valido');;
        }
    }
    if (er.test(email.value) && asunto.value !== ''&& mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

//==== Mostrar mensaje Error===
function mostrarError(menssage) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = menssage ;
    mensajeError.classList.add('border-red-500','border','background-red-100', 'text-red-500', 'text-center','p-3', 'mt-5','error');


    const errores = document.querySelectorAll('.error');// el poder de javascritp ver como se esta ejecutando
        if(errores.length === 0){//si hay un string vacio entonces
            formulario.appendChild(mensajeError);// mostrar el error
        }
}