const express = require('express')
const handlebars = require ('express-handlebars')


const app = express()
const port = 3030


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'))
app.engine('handlebars', handlebars.engine())
app.set('view engine', "handlebars")
app.set('views', __dirname + '/views')


// app.get('/views', (req, res) => {
//   res.render('index', {
//     title: 'e-commerse',
//     name: 'nombre'
//   });
//   app.listen(port)
// });


app.get('/', (req, res) => {
  res.render('index', {
    title: 'e-commerse',
    name: 'nombre'
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
