const express = require('express')
const { Router } = express
const Contenedor = require('./Contenedor.js')

const app = express()
const routerProd = Router()
const port = process.env.PORT|| 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.use('/api/productos', routerProd);

app.get('/', (req, res) => {
  res.send('<h1>Servidor AD </h1>');
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
  let resultado = contenedor.modfByID(id.toString(), body.title, body.price, body.thumbnail)
  res.json(resultado)
})

routerProd.delete('/:id', async (req, res)=>{
  const { id } = req.params
  const contenedor = new Contenedor()
  let resultado = contenedor.deleteById(id.toString())
  res.json(resultado)
})