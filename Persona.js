class Persona {

    /// En una clase se declaran las variables antes del constructor

    nombre;
    // turnos;
    turnos;


    constructor(nombre, turnos) {

        /// Asigno los valores de los parametros a las propiedades de el objeto
        /// this significa "Este" haciendo referencia a la propiedad


        ///this.nombre es lo mismo que let nombre = nombre solo que en objetos se utiliza la asignacion de esa manera
        this.nombre = nombre; /// Asigno a la propiedad "nombre" el valor que le pasen por el parametro "nombre"
        // this.apellido = apellido; /// Asigno a la propiedad "apellido" el valor que le pasen por el parametro "apellido"
        this.turnos = turnos;
        ///this.dni = dni; /// Asigno a la propiedad "dni" el valor que le pasan por el parametro "dni"
    }

}









