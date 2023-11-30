let nombre;
let preguntaBienvenida;
let busquedaTurnos;
let consulta;
let mensaje = 'ERROR';

/// Variables para llevar un conteo de las consultas de cada especialista

let consulClinico = 0;
let consulTrauma = 0;
let consulPsico = 0;
let consulDerma = 0;
let consulGine = 0;
let consul = 0;

const especialistas = ['Medico Clinico', 'Traumatologo', 'Psicologo', 'Dermatologo', 'Ginecologo'];

const turnos = [];

function agregarTurno (array,nombre, especialista){

    array.push(new Persona(nombre,especialista));

}


function tomarTurno(nombre) {

    /// Declaro una variable para poder guardar lo ingresado por el usuario
    let profesionalMedico;
    let especialista;
    let salir = 0;
    
    /// Realizo un do while, para que lleve a cabo las acciones mientras se cumpla la condicion

    do {

        /// Pido al usuario que me diga que turno quiere reservar

        profesionalMedico = +prompt(`Bienvenidos a consultorios Piculi ${nombre}` + '\n' +
            '¿Con que especialista desea un turno?' + '\n' +
            `1) ${especialistas[0]}` + '\n' +
            `2) ${especialistas[1]}` + '\n' +
            `3) ${especialistas[2]}` + '\n' +
            `4) ${especialistas[3]}` + '\n' +
            `5) ${especialistas[4]}` + '\n' +
            '\n' +
            '¿Desea Salir? Presione 0');

        /// Verifico datos ingresados por el usuario

        if (isNaN(profesionalMedico) && profesionalMedico !== salir) {

            alert('Ingreso una opcion incorrecta!');


        } else {

            /// Una vez verificado el valor ingresado, proceso a verificar con que especialista quiere reservar el turno

            if (profesionalMedico !== 0) {
                /// Guardo el valor ingresado
                /// Le resto 1 al valor ingresado por el usuario para que queden con el mismo valor que los indices del array
                consulta = profesionalMedico - 1; 

                /// Agrego 1 unidad a consul
                consul++;

                /// Realizo las comparaciones para que tomen la accion correspondiente con switch
                switch (consulta) {

                    /// Comparo y en caso de que coincidan los valores, muestro por pantalla el nombre y la
                    /// cantidad de personas que tienen delante de uno, en caso de que haya un turno previo
                    case 0:
                        if (consulClinico == 0) {
                            alert(`Perfecto ${nombre} eres el primero`);
                        } else {
                            alert(`Perfecto ${nombre} tienes ${consulClinico} delante de ti`);
                        }

                        /// Guardo el nomber del especialista en una variable
                        especialista = especialistas[consulta];

                        /// Agrego al array turnos, una clase persona, con su nombre y el especialista reservado
                        agregarTurno(turnos,nombre,especialista)

                        /// Sumo 1 a las consultas de los clinicos
                        consulClinico++;
                        /// Vuelvo a llamar a la funcion para que el usuario decida si quiere tomar otro turno
                        return tomarTurno(nombre);

                    case 1:
                        if (consulTrauma == 0) {
                            alert(`Perfecto ${nombre} eres el primero`);
                        } else {
                            alert(`Perfecto ${nombre} tienes ${consulTrauma} delante de ti`);
                        }

                        especialista = especialistas[consulta];

                        agregarTurno(turnos,nombre,especialista)

                        consulTrauma++;

                        return tomarTurno(nombre);
                        
                    case 2:
                        if (consulPsico == 0) {
                            alert(`Perfecto ${nombre} eres el primero`);
                        } else {
                            alert(`Perfecto ${nombre} tienes ${consulPsico} delante de ti`);
                        }

                        especialista = especialistas[consulta];

                        agregarTurno(turnos,nombre,especialista)

                        consulPsico++;

                        return tomarTurno(nombre);

                    case 3:
                        if (consulDerma == 0) {
                            alert(`Perfecto ${nombre} eres el primero`);
                        } else {
                            alert(`Perfecto ${nombre} tienes ${consulDerma} delante de ti`);
                        }

                        especialista = especialistas[consulta];

                        agregarTurno(turnos,nombre,especialista)

                        consulDerma++;

                        return tomarTurno(nombre);

                    case 4:
                        if (consulGine == 0) {
                            alert(`Perfecto ${nombre} eres el primero`);
                        } else {
                            alert(`Perfecto ${nombre} tienes ${consulGine} delante de ti`);
                        }

                        especialista = especialistas[consulta];

                        agregarTurno(turnos,nombre,especialista)

                        consulGine++;

                        return tomarTurno(nombre);


                    default:
                        /// En caso de que no ingrese una opcion correcta, muestro este msj
                        alert('Usted a ingresado una opcion incorrecta');

                        return tomarTurno(nombre);

                }

            }

        }
        /// Mientras no se cumpla esta condicion seguira agregando turnos
    } while (profesionalMedico !== 0);


}

/// Realizo el do while de bienvenida para consultar si el usuario quiere reservar turnos
/// en caso de que sea que si, lo verifico y llamo a la funcion, tomar turno

do {
    preguntaBienvenida = prompt('Bienvenido, ¿Desea reservar un turno? S/N');

    /// Valido que lo ingresado por el usuario sea diferente de N
    if (preguntaBienvenida !== 'N') {

        nombre = prompt('Ingrese nombre por favor = ');

        /// Valido que lo ingresado por el usuario sea un string
        if (typeof nombre !== 'string') {
            alert('No ingreso un nombre valido!!')
            nombre = prompt('Ingrese nombre por favor = ');
        } else {

            /// Llamo a la funcion
            tomarTurno(nombre);

        }

    } else {

        do {
            /// Consulto si quiere buscar turnos
            busquedaTurnos = prompt('¿Desea buscar turnos? Si/No')

            /// Valido el ingreso del usuario
            if (busquedaTurnos !== 'No') {

                /// Creo una variable para guardar el nombre de la persona a buscar
                let buscarTurnosDelPaciente = prompt('Bienvenido, introduzca el nombre de la persona de la cual quiera saber si tomo turnos aqui');
                
                /// Uso el metodo filter para que solo me traiga los elementos del array que cumplan con la condicion
                const resultadoDelFiltradoDeTurnos = turnos.filter((persona) => persona.nombre.includes(buscarTurnosDelPaciente));

                /// verifico que el array nuevo no este vacio
                if (resultadoDelFiltradoDeTurnos.length === 0) {
                    console.log('Este paciente no tiene turnos');
                } else {

                    /// Imprimo por consola el nombre del paciente y sus turnos
                    console.log('El paciente ' + `${buscarTurnosDelPaciente}` + ' tomo estos turnos : ');

                    resultadoDelFiltradoDeTurnos.forEach(persona => {
                        console.log(persona.turnos);
                    });

                }


            } else {
                console.log('Muchas gracias');
            }


        } while (busquedaTurnos !== 'No');



        alert('Hasta luego!');
    }

} while (preguntaBienvenida !== 'N');

alert('Muchas gracias por su visita')
