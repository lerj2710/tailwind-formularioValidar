import {btnEnviar, resetearForm} from './selectores.js';

// //expresion regular
//  const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//======== funciones =========

export function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}
    
// export function validarFormulario(e){// validar que no este vacio el formulario

//         if(e.target.value.length > 0){
//             //  Elimina los errores
//             const error = document.querySelector('p.error');
//             if(error){
//                 error.remove(); 
//             }
//             e.target.classList.remove('border-red-500','border');
//             e.target.classList.add('border-green-500','border');
//         }else{
//             e.target.classList.remove('border-green-500','border');
//             e.target.classList.add('border-red-500','border');

//                 mostrarError('todos los campos son obligatorio');
//         }
//         if(e.target.type === 'email'){
//                 // const resultado = e.target.value.indexOf('@'); //validacion regular
//             if(er.test(e.target.value)){            
//                 //  Elimina los errores
//                     const error = document.querySelector('p.error');
//                     if(error){
//                         error.remove(); 
//                     };
//                 e.target.classList.remove('border-red-500','border');   
//                 e.target.classList.add('border-green-500','border');    
//             }else{
//                 e.target.classList.remove('border-green-500','border');
//                 e.target.classList.add('border-red-500','border');
//                 mostrarError('Email no valido');;
//             }
//         }
//         if (er.test(email.value) && asunto.value !== ''&& mensaje.value !== '') {
//             btnEnviar.disabled = false;
//             btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
//         }
// }
    
    //==== Mostrar mensaje Error===

//     export function mostrarError(menssage) {
//         const mensajeError = document.createElement('p');
//         mensajeError.textContent = menssage ;
//         mensajeError.classList.add('border-red-500','border','background-red-100', 'text-red-500', 'text-center','p-3', 'mt-5','error');
    
    
//         const errores = document.querySelectorAll('.error');// el poder de javascritp ver como se esta ejecutando
//             if(errores.length === 0){//si hay un string vacio entonces
//                 formulario.appendChild(mensajeError);// mostrar el error
//             }
// }
    
    //===== enviar email

//     export   function enviarEmail(e) {
//     e.preventDefault();
    
//     //llamar de spiner
//     const spinner = document.querySelector('#spinner');
//     spinner.style.display = 'flex';


//     //quitar despues de 3 segundos
//     setTimeout(() => {
//         spinner.style.display = 'none';
//         // crear mensaje de envio
//         const parrafo = document.createElement('p');
//         parrafo.textContent= 'se envio correctamente'
//         parrafo.classList.add('text-center', 'bg-green-500','my-5', 'p-3','uppercase','font-bold', 'text-while');
//         //insertar el mensaje
//         formulario.insertBefore(parrafo, spinner) ;        
        
//         setTimeout(() => {
//             parrafo.remove();
//             resetearForm();
//         }, 5000);
//     }, 3000);
// }

    // funcion que resetea el  formulario
export  function resetearForm() {
        formulario.reset();

        iniciarApp();

}


   