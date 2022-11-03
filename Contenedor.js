const fs = require('fs');

class Contenedor {
    getById = async (id) => {
        try{
            let contenido = JSON.parse(await fs.promises.readFile('./productos.json'))
            const element = contenido.find(item => item.id === id)
            if(element){
                return element
            }else{                
                return { 'error' : 'producto no encontrado' }
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
            const element = contenido.find(item => item.id === id)
            if(element){
                let borrado = JSON.stringify(contenido.filter(item => item.id !== id))
                await fs.promises.writeFile('./productos.json', borrado)
                return { 'success': true }
            }else{
                return { 'error' : 'producto no encontrado' }
            }
        }
        catch(err){
            console.log('Error : ' + err)    
        }
    }

    save = async (dato) => {
        try{
            console.log(dato)
            let contenido = JSON.parse(await fs.promises.readFile('./productos.json'))        
            let id = 0
            contenido.forEach(element => {
                element.id > id ? id = element.id : id = id
            });
            id++
            dato.id = id.toString()
            contenido.push(dato)
            let salvado = JSON.stringify(contenido)
            await fs.promises.writeFile('./productos.json', salvado)
            return this.getById(dato.id)
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

    modfByID = async (id, title, price, thumbnail) => {
        try{
            let contenido = JSON.parse(await fs.promises.readFile('./productos.json'))
            let element = contenido.find(item => item.id === id)
            
            if(element)
            {  
                let modificado = contenido.filter(item => item.id !== id)
                
                element.title = title
                element.price = price
                element.thumbnail = thumbnail
                modificado.push(element)
                let salvado = JSON.stringify(modificado)
                //console.log(salvado)
                await fs.promises.writeFile('./productos.json', salvado)
                console.log('ok')
                return { 'success': true } 
            }else{
                return { 'error' : 'producto no encontrado' }
            }
        }
        catch(err){
            console.log('Error : ' + err)    
        }
    }
}
module.exports = Contenedor;

