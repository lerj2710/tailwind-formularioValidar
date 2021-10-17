import { email, asunto, mensaje, btnReset, formulario} from './selectores.js';
import  {validarFormulario, resetearForm, enviarEmail, iniciarApp} from './funciones.js';
//====== evento =======
eventListener();
function eventListener() {
    // Iniciar ó cargar la App
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //campos del formulario
    email.addEventListener('blur', validarFormulario);// recoradar blur me funciona para cuando quiera salir de un formulario no este vacio
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);// recoradar blur me funciona para cuando quiera salir de un formulario no este vacio
       
    //reiniciar btn
        btnReset.addEventListener('click', resetearForm);
    
    //enviar email
    formulario.addEventListener('submit', enviarEmail);  
 

}


export default eventListener;