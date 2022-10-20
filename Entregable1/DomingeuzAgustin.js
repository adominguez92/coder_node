class Usuario {
    constructor(nombre,apellido,libros,mascotas){
    this.nombre = nombre
    this.apellido = apellido
    this.libros = libros
    //this.libros.push(libros)
    this.mascotas = mascotas
    //this.mascotas.push(mascotas)
}
    getFullName(){
        return `${this.nombre} ${this.apellido}`
        
    }
    addMascota(nombre){
        this.mascotas.push(nombre)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombre, autor){
        let libro = {nombre: nombre, autor: autor}
        this.libros.push(libro)
    }
    getBookNames(){
        let nombres = this.libros.map(item => item.nombre)
        return nombres
    }

}
const u = new Usuario("Adrian", "Fenandez", [{nombre: "Jesus" ,autor: "Carlos"}], ['Raquel'])

//prueba de funciones
console.log(u.getFullName())

u.addMascota("Juliana")
console.log(u.mascotas)

console.log(u.countMascotas())

u.addBook("Maveric", "Joselo")
console.log(u.libros[0])
console.log(u.libros[1])

console.log(u.getBookNames())