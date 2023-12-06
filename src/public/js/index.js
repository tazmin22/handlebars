const socket = io();



//socket.emit('recibirMensajeCliente', 'estoy usando socket')

socket.on ('evento-para-todos', dataServer =>{
    console.log(dataServer)
})