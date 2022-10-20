const Contenedor = require('./Contenedor.js')

const testApp = async () => {

    const contenedor = new Contenedor()
    
     await contenedor.save({    
        "title":"Peluche de Picachu",
        "price":"1600",
        "thumbnail":"https://res.cloudinary.com/none-img/image/upload/v1663341518/Peluches/pika_mfzfuu.jpg",
        "id":""
    }) 
    
    console.log(await contenedor.getAll());
    
    console.log(await contenedor.getById('3'));
    
    await contenedor.deleteById('1');
    
    await contenedor.deleteAll();    
    }
    
    testApp()



