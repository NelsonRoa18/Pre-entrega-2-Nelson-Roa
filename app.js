let nombreYApellido;
let preguntaBienvenida;
let busquedaTurnos;
let consulta;
let mensaje = 'ERROR';

let consulClinico = 0;
let consulTrauma = 0;
let consulPsico = 0;
let consulDerma = 0;
let consulGine = 0;
let consul = 0;

const especialistas = ['Medico Clinico', 'Traumatologo', 'Psicologo', 'Dermatologo', 'Ginecologo'];

const turnos = [];

function tomar__turno(nombreYApellido) {



    let profesionalMedico;
    // let medico_clinico = '1';
    // let traumatologo = '2';
    // let psicologo = '3';
    // let dermatologo = '4';
    // let ginecologo = '5';
    let salir = 0;

    do {


        profesionalMedico = +prompt(`Bienvenidos a consultorios Piculi ${nombreYApellido}` + '\n' +
            '¿Con que especialista desea un turno?' + '\n' +
            `1) ${especialistas[0]}` + '\n' +
            `2) ${especialistas[1]}` + '\n' +
            `3) ${especialistas[2]}` + '\n' +
            `4) ${especialistas[3]}` + '\n' +
            `5) ${especialistas[4]}` + '\n' +
            '\n' +
            '¿Desea Salir? Presione 0');

        if (isNaN(profesionalMedico) && profesionalMedico !== salir) {

            alert('Ingreso una opcion incorrecta!');


        } else {

            if (profesionalMedico !== 0) {
                consulta = profesionalMedico - 1;
                consul++;


                switch (consulta) {


                    case 0:
                        if (consulClinico == 0) {
                            alert(`Perfecto ${nombreYApellido} eres el primero`);
                        } else {
                            alert(`Perfecto ${nombreYApellido} tienes ${consulClinico} delante de ti`);
                        }


                        turnos.push(new Persona(nombreYApellido, especialistas[consulta]));

                        consulClinico++;

                        return tomar__turno(nombreYApellido);

                    case 1:
                        if (consulTrauma == 0) {
                            alert(`Perfecto ${nombreYApellido} eres el primero`);
                        } else {
                            alert(`Perfecto ${nombreYApellido} tienes ${consulTrauma} delante de ti`);
                        }

                        turnos.push(new Persona(nombreYApellido, especialistas[consulta]));

                        consulTrauma++;

                        return tomar__turno(nombreYApellido);

                    case 2:
                        if (consulPsico == 0) {
                            alert(`Perfecto ${nombreYApellido} eres el primero`);
                        } else {
                            alert(`Perfecto ${nombreYApellido} tienes ${consulPsico} delante de ti`);
                        }

                        turnos.push(new Persona(nombreYApellido, especialistas[consulta]));

                        consulPsico++;

                        return tomar__turno(nombreYApellido);

                    case 3:
                        if (consulDerma == 0) {
                            alert(`Perfecto ${nombreYApellido} eres el primero`);
                        } else {
                            alert(`Perfecto ${nombreYApellido} tienes ${consulDerma} delante de ti`);
                        }

                        turnos.push(new Persona(nombreYApellido, especialistas[consulta]));

                        consulDerma++;

                        return tomar__turno(nombreYApellido);

                    case 4:
                        if (consulGine == 0) {
                            alert(`Perfecto ${nombreYApellido} eres el primero`);
                        } else {
                            alert(`Perfecto ${nombreYApellido} tienes ${consulGine} delante de ti`);
                        }

                        turnos.push(new Persona(nombreYApellido, especialistas[consulta]));

                        consulGine++;

                        return tomar__turno(nombreYApellido);


                    default:
                        alert('Usted a ingresado una opcion incorrecta');

                        return tomar__turno(nombreYApellido);

                }

            }

        }

    } while (profesionalMedico !== 0);


}



do {
    preguntaBienvenida = prompt('Bienvenido, ¿Desea reservar un turno? S/N');


    if (preguntaBienvenida !== 'N') {

        nombreYApellido = prompt('Ingrese nombre y apellido por favor = ');

        if (typeof nombreYApellido !== 'string') {
            alert('No ingreso un nombre valido!!')
            nombreYApellido = prompt('Ingrese nombre y apellido por favor = ');
        } else {
            tomar__turno(nombreYApellido);

        }

    } else {

        do {
            busquedaTurnos = prompt('¿Desea buscar turnos? Si/No')

            if (busquedaTurnos !== 'No') {

                let buscarTurnosDelPaciente = prompt('Bienvenido, introduzca el nombre de la persona de la cual quiera saber si tomo turnos aqui');

                const resultado = turnos.filter((persona) => persona.nombre.includes(buscarTurnosDelPaciente));

                console.log('El paciente = ' + `${buscarTurnosDelPaciente}` + ' tomo estos turnos : ');

                if (resultado.length === 0) {
                    console.log('Este paciente no tiene turnos');
                } else {
                    resultado.forEach(element => {
                        console.log(element.turnos);
                    });

                }


            } else {
                console.log('Ingrese una opcion valida' + '\n' + 'Si/No');
            }


        } while (busquedaTurnos !== 'No');


        // if (turnos.some((persona) => { return persona.nombre === `${buscarTurnos}` })) {
        //     turnos.forEach((element) => {
        //         if (element.nombre == `${buscarTurnos}`) {
        //             console.log(element.turnos);
        //         }
        //     });
        // } else {
        //     alert('No hacemos descuento');
        // }





        alert('Hasta luego!');
    }

} while (preguntaBienvenida !== 'N');

alert('Muchas gracias por su visita')
