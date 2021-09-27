//===== variables=====
const btnEnviar = document.querySelector('#enviar');

//====== evento =======
eventListener();
function eventListener() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
}

//======== funciones =========

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add( 'cursor-not-allowed',' opacity-50');
}


