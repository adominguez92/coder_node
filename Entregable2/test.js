const Contenedor = require('./Contenedor.js')

const c = new Contenedor()
//c.deleteAll()
//Prueba de funcion Save
//c.save({"title":"Peluche de Picachu","price":"1600","thumbnail":"https://res.cloudinary.com/none-img/image/upload/v1663341518/Peluches/pika_mfzfuu.jpg","id":"1"})
//c.save({"title":"Peluche de Eevee","price":"1600","thumbnail":"ttps://res.cloudinary.com/none-img/image/upload/v1663341518/Peluches/eevee_z4p8at.jpg","id":""})
//c.save({"title":"Peluche Charmander","price":"1000","thumbnail":"https://res.cloudinary.com/none-img/image/upload/v1663341517/Peluches/char_e3u0ey.jpg","id":""})

//Prueba de funcion getById
let element = c.getById('1')
console.log(element)
/*
element = c.getById('4')
console.log(element)

//Prueba de funcion deleteById
c.deleteById('4')

//Prueba de getAll
element = c.getAll()
console.log(element)
*/
//prueba de deleteAll
/*c.deleteAll()
//element = c.getAll()
//console.log(element)
*/
//reconstruir archivo

