const fs = require('fs');

class Contenedor {
    getById = async (id) => {
        try{
            let contenido = JSON.parse(await fs.promises.readFile('./productos.json'))
            const element = contenido.find(item => item.id === id)
            if(element){
                return element
            }else{
                return null
            }

        }
        catch(err){
            console.log('Error : ' + err)    
        }
}
    getAll = async () => {
        try{
            let contenido = JSON.parse(await fs.promises.readFile('./productos.json'))
            return contenido     
        }
        catch(err){
            console.log('Error : ' + err)    
        }
    }
    deleteById = async (id) => {
        try{
            let contenido = JSON.parse(await fs.promises.readFile('./productos.json'))
            let borrado = JSON.stringify(contenido.filter(item => item.id !== id))
            await fs.promises.writeFile('./productos.json', borrado)
            
        }
        catch(err){
            console.log('Error : ' + err)    
        }
    }

    save = async (dato) => {
        try{
            let contenido = JSON.parse(await fs.promises.readFile('./productos.json'))        
            let id = (contenido.length + 1).toString()
            dato.id = id 
            contenido.push(dato)
            let salvado = JSON.stringify(contenido)
            await fs.promises.writeFile('./productos.json', salvado)
        }
        catch(err){
            console.log('Error : ' + err)    
        }
    }

    deleteAll = async () => {
        try{
            let vacio = JSON.stringify([])
            await fs.promises.writeFile('./productos.json', vacio)
        }
        catch(err){
            console.log('Error : ' + err)    
        }
    }
}
module.exports = Contenedor;

