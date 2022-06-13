// Referenciasl del HTML
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');


const socket = io();

socket.on('connect', () => {
    console.log('s connect');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    console.log('s disconnect');
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '1313',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload);
});

