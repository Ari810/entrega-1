let personas = [];

const FECHA_ACTUAL = [7, 8, 2025];

const verificadorNumerico = (numero) => {
    while (numero === "" || numero === null || isNaN(numero)) {
        numero = prompt("Ingrese un numero valido");
    }
    numero = parseInt(numero);
    return numero;
};

let cantidadDePersonas = prompt("Ingrese la cantidad de personas:");
cantidadDePersonas = verificadorNumerico(cantidadDePersonas);

const agregarPersona = (nombrePersona, dia, mes, año) => {
    personas.push({
        nombre: nombrePersona,
        dia: dia,
        mes: mes,
        año: año,
    });
};

const fecha = () => {
    let dia = verificadorNumerico(prompt("Ingrese dia de nacimiento:"));
    let mes = verificadorNumerico(prompt("Ingrese mes de nacimiento: "));
    let año = verificadorNumerico(prompt("Ingrese año de nacimiento: "));
    return [dia, mes, año];
};

for (let i = 1; i <= cantidadDePersonas; i++) {
    let nombreAgregado = prompt(`Ingrese el nombre de la ${i}º persona:`);
    let [dia, mes, año] = fecha();
    agregarPersona(nombreAgregado, dia, mes, año);
}

const listadoCompleto = () => {
    let personasTotal = `Lista completa: \n`;

    for (let i = 0; i < personas.length; i++) {
        personasTotal += `
        Nombre: ${personas[i].nombre}
        Fecha de nacimiento: ${personas[i].dia}/${personas[i].mes}/${personas[i].año}
        `;
    }
    return console.log(personasTotal);
};

listadoCompleto();
