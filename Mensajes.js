const fs = require('fs');

class Mensajes {
    
    getAll = async () => {
        try{
            let contenido = JSON.parse(await fs.promises.readFile('./recoMensajes.json'))
            return contenido     
        }
        catch(err){
            console.log('Error : ' + err)    
        }
    }

    save = async (dato) => {
        try{
            console.log(dato)
            let contenido = JSON.parse(await fs.promises.readFile('./productos.json'))        
            contenido.push(dato)
            let salvado = JSON.stringify(contenido)
            await fs.promises.writeFile('./recoMensajes.json', salvado)
        }
        catch(err){
            console.log('Error : ' + err)    
        }
    }

}
module.exports = Mensajes;

