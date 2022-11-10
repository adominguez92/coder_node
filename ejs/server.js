const express = require('express')
const { render } = require('pug')
const { Router } = express
const Contenedor = require('./Contenedor.js')

const app = express()
const routerProd = Router()
const port = process.env.PORT|| 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'ejs'); //configuracion para ejs

/**
  API
**/
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
app.use('/api/productos', routerProd);

app.get('/', (req, res) => {
  res.send('<h1>Servidor AD</h1>');
});

app.get('/formulario', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

routerProd.get('/', async (req, res) => {
  const contenedor = new Contenedor();
  const todos = await contenedor.getAll();
  res.json(todos)
})

routerProd.get('/:id', async (req, res) => {
  const { id } = req.params
  const contenedor = new Contenedor()
  const producto = await contenedor.getById(id.toString())
  res.json(producto)
})

routerProd.post('/', async (req, res) => {
  const { body } = req
  const contenedor = new Contenedor()
  const prodAgregado = await contenedor.save(body)
  res.json(prodAgregado)
})

routerProd.put('/:id', async (req, res)=>{
  const { id } = req.params
  const { body } = req
  const contenedor = new Contenedor()
  let resultado = await contenedor.modfByID(id.toString(), body.title, body.price, body.thumbnail)
  res.json(resultado)
})

routerProd.delete('/:id', async (req, res)=>{
  const { id } = req.params
  const contenedor = new Contenedor()
  let resultado = await contenedor.deleteById(id.toString())
  res.json(resultado)
})

/**
  Render de Plantillas
**/

//usando ejs
app.get('/products', async (req, res)=>{
  const contenedor = new Contenedor();
  const todos = await contenedor.getAll();
  res.render('pages/products', {title: 'Lista de productos', products: todos })
})


app.post('/products', async (req, res)=>{
  const { body } = req
  const contenedor = new Contenedor()
  const prodAgregado = await contenedor.save(body)
  res.json(prodAgregado)
  res.render('pages/ingresado')
})

app.get('/form', (req, res)=>{
  res.render('pages/form', {title:'Ingresar un producto'})
})


