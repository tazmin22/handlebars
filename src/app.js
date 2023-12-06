const express = require('express')
const handlebars = require ('express-handlebars')
const { Server } = require('socket.io')  


const app = express()
const port = 3030
const ViewsRouter = require ('./router/api/views.router')


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'))

app.engine('handlebars', handlebars.engine())
app.set('view engine', "handlebars")
app.set('views', __dirname + '/views')


app.use('/views', ViewsRouter)


app.get('/', (req, res) => {
  res.render('index', {
    title: 'e-commerse',
    name: 'nombre',
    style: 'index.css'
  });
})

const serverHttp = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



const socketServer = new Server(serverHttp)
socketServer.on('connection', socket => {
    console.log('Nuevo cliente conectado')

    socket.on('recibirMensajeCliente', data => {
        console.log(data)
    })


    //esto sirve para cargar un producto
    socketServer.emit('evento-para-todos', 'este mensaje lo reciben todos')
  })