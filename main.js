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

const mayores = () => {};
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
            contador += 1;
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
