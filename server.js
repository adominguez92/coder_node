const express = require('express')
const Contenedor = require('./Contenedor.js')

const app = express()
const port = process.env.PORT|| 8080

app.get('/', (req, res) => {
  res.send('Hola mundo estamos online, en el proyecto de AD!')
})

app.get('/productos', async (req, res) => {
  
  const contenedor = new Contenedor();
  const todos = await contenedor.getAll();
  res.json(todos)
})

app.get('/productoRandom', async (req, res) => {
  const generarAleatorio = (min, max) => {
    return Math.floor(Math.random() * (1 + max - min)) + min;
  }
  const productoID = generarAleatorio(1,3).toString();
  const contenedor = new Contenedor();
  const producto = await contenedor.getById(productoID)
  res.json(producto)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})