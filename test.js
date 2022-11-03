const Contenedor = require('./Contenedor.js')

const testApp = async () => {

    const contenedor = new Contenedor()
    
    /*console.log(await contenedor.save({    
        "title":"Peluche de Picachu",
        "price":"1600",
        "thumbnail":"https://res.cloudinary.com/none-img/image/upload/v1663341518/Peluches/pika_mfzfuu.jpg",
        "id":""
    }) )
    */
    //await contenedor.modfByID('1', "Peluche de Picachu", '1500', 'https://res.cloudinary.com/none-img/image/upload/v1663341518/Peluches/pika_mfzfuu.jpg')
   // console.log(await contenedor.getAll());
    
   // console.log(await contenedor.getById('3'));
    
    await contenedor.deleteById('10');
    /*
    await contenedor.deleteAll();    */
    }
    
    testApp()



