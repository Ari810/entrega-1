// Creo el array
let personas = [];

const FECHA_ACTUAL = [9, 8, 2025];

/**
 *  @description Esta funcion verifica que lo introducido por el usuario sea un numero
 * @param {Number} numero
 * @returns Cantidad de personas
 */
const verificadorNumerico = (numero) => {
    while (numero === "" || numero === null || isNaN(numero)) {
        numero = prompt("Ingrese un numero valido");
    }
    numero = parseInt(numero);
    return numero;
};

// Cantidad de personas para poder utilizarlo en el for
let cantidadDePersonas = prompt("Ingrese la cantidad de personas:");
cantidadDePersonas = verificadorNumerico(cantidadDePersonas);

/**
 * @description Esta funcion es para agregar personas al array
 * @param {String} nombrePersona - Nombre de la persona ingresada
 * @param {Number} dia - Dia de nacimiento
 * @param {Number} mes - Mes de nacimiento
 * @param {Number} año - Año de nacimiento
 */
const agregarPersona = (nombrePersona, dia, mes, año) => {
    personas.push({
        nombre: nombrePersona,
        dia: dia,
        mes: mes,
        año: año,
    });
};

/**
 * Esta funcion es para pedirle al usuario la fecha de cumpleaños de cada persona
 * @returns Dia, mes y año de la persona
 */
const fecha = () => {
    let dia = verificadorNumerico(prompt("Ingrese dia de nacimiento:"));
    let mes = verificadorNumerico(prompt("Ingrese mes de nacimiento: "));
    let año = verificadorNumerico(prompt("Ingrese año de nacimiento: "));
    return [dia, mes, año];
};

// Este es el for para agregar personas
for (let i = 1; i <= cantidadDePersonas; i++) {
    let nombreAgregado = prompt(`Ingrese el nombre de la ${i}º persona:`);
    let [dia, mes, año] = fecha();
    agregarPersona(nombreAgregado, dia, mes, año);
}

/**
 * @description Con esta funcion se puede ver un listado completo de las personas
 * @returns Lista total de personas
 */
const listadoCompleto = () => {
    let personasTotal = `Lista completa: \n`;

    for (let i = 0; i < personas.length; i++) {
        personasTotal += `
        Nombre: ${personas[i].nombre}
        Fecha de nacimiento: ${personas[i].dia}/${personas[i].mes}/${personas[i].año}
        `;
    }
    return personasTotal;
};

// Aca mostramos por consola dicho listado
console.log(listadoCompleto());

/**
 * @description Esta funcion pregunta al usuario si quiere ver que usuarios son mayores. Al confirmar, una alerta avisa la cantidad de mayores y por consola veremos la lista con esa gente.
 */
const mayores = () => {
    if (confirm("¿Desea una lista con todas las personas mayores de edad?")) {
        let personasMayores = `Las personas mayores son:\n`;
        let contador = 0;
        for (let i = 0; i < personas.length; i++) {
            let restoAños = FECHA_ACTUAL[2] - personas[i].año;
            if (
                restoAños > 18 ||
                (restoAños === 18 && FECHA_ACTUAL[1] > personas[i].mes) ||
                (restoAños === 18 &&
                    FECHA_ACTUAL[1] === personas[i].mes &&
                    FECHA_ACTUAL[0] >= personas[i].dia)
            ) {
                personasMayores += `- ${personas[i].nombre}\n`;
                contador++;
            }
        }
        if (contador > 1) {
            alert(`Son ${contador} personas mayores`);
            console.log(personasMayores);
        } else if (contador === 1) {
            alert(`Es ${contador} persona mayor`);
            console.log(personasMayores);
        } else {
            alert("No hay mayores de edad");
        }
    }
};

//Llamamos la funcion
mayores();
