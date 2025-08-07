let personas = [];

const verificadorNumerico = (numero) => {
    while (numero === "" || numero === null || isNaN(numero)) {
        numero = prompt("Ingrese un numero valido");
    }
    numero = parseInt(numero);
    return numero;
};

let cantidadDePersonas = prompt("Ingrese la cantidad de personas:");
cantidadDePersonas = verificadorNumerico(cantidadDePersonas);

const agregarPersona = (nombrePersona, fechaPersona) => {
    personas.push({
        nombre: nombrePersona,
        nacimiento: fechaPersona,
    });
};

const fecha = () => {
    let dia = prompt("Ingrese dia de nacimiento:");
    dia = verificadorNumerico(dia);
    let mes = prompt("Ingrese mes de nacimiento: ");
    mes = verificadorNumerico(mes);
    let año = prompt("Ingrese año de nacimiento: ");
    año = verificadorNumerico(año);

    return `${dia}/${mes}/${año}`;
};

for (let i = 1; i <= cantidadDePersonas; i++) {
    let nombreAgregado = prompt(`Ingrese el nombre de la ${i}º persona:`);
    let fechaAgregada = fecha();
    agregarPersona(nombreAgregado, fechaAgregada);
}

const listadoCompleto = () => {
    let personasTotal = `Lista completa: \n`;

    for (let i = 0; i < personas.length; i++) {
        personasTotal += `
        Nombre: ${personas[i].nombre}
        Fecha de nacimiento: ${personas[i].nacimiento}
        `;
    }
    return console.log(personasTotal);
};

listadoCompleto();
