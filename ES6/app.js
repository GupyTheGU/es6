//----------------------------------------------------------SECCION 1---------------------------------------------------
console.log("---------SECCION 1-------");
var funciones = [];
//OBJETO COMO CONSTANTE
const PERSONA = {
    nombre: "GupyTheGU",
    rank: "Plata"
};
//PARA LLENAR UN ARREGLO CON FUNCIONES
for (let i = 0; i < 10; i++) {
    funciones.push(function () { console.log(i); });
    // funciones.push(
    //     (function (valor) {
    //         return function () { console.log(valor) };
    //     })(i)
    // );
}
//PARA RECORRER LAS FUNCIONES DEL ARREGLO
funciones.forEach(
    function (func) {
        func();
    }
);
console.log(PERSONA);
//----------------------------------------------------------SECCION 2-------------------------------------------------------
console.log("---------SECCION 2-------");
var saludo = "masita come kk";
//con js5
console.log(saludo.substr(0, 1) === "m");
//con es6
console.log(saludo.startsWith("m"));
console.log(saludo.startsWith("ita", 3));

console.log(saludo.endsWith("kk"));
console.log(saludo.indexOf("come"));

console.log(saludo.includes("X"));
console.log(saludo.includes("a", 7));

//REPETIR STRINGS
let texto = "Hanna";
console.log(texto.repeat(2));
console.log("hola".repeat(3));

//PARA DAR FORMATO
const ESPACIOS = 12;
let nombres = ["Hanna", "Mimi", "Masita"];
let edad = ["5", "1.5", "1"];

for (i in nombres) {
    let dif = ESPACIOS - nombres[i].length;
    console.log(nombres[i] + " ".repeat(dif) + edad[i]);
}
//LITERAL TEMPLATES
function obtenTexto() {
    return "no soy eloboosteada";
}
let textoCompleto = `El rango de ${PERSONA.nombre} es ${PERSONA.rank}  y ${obtenTexto()} asies`;
console.log(textoCompleto);
let miHTML = `<h1 class="${texto}"> HOLAAA</h1>`;
console.log(miHTML);

//TEMPLATES CON TAGS
function etiqueta(literales, ...sustituciones) {
    let resultado = "";
    let i = 0;
    console.log(literales);
    console.log(sustituciones);

    for (let i = 0; i < sustituciones.length; i++) {
        resultado += literales[i];
        resultado += sustituciones[i];
    }
    return resultado;
}
let costo = 5;
let piezas = 10;
let ejemplo = etiqueta`${costo} lapices cuestan ${costo * piezas} pesos`;
console.log(ejemplo);

//VALORES RAW
let mensaje = `\hola \\mundo//\\s`;
let mensaje2 = String.raw`\hola \\mundo//\\s`;
console.log(mensaje);
console.log(mensaje2);
//----------------------------------------------------------SECCION 3-------------------------------------------------------
console.log("---------SECCION 3-------");
//SE INICIALIZA EN LOS ARGUMENTOS SI SON VALORES OPCIONALES
//LOS OPCIONALES VAN DESPUES DE LOS PERMANENTES
function opcional(mensaje = "Holis", tiempo = 2000) {
    //mensaje=mensaje||"Hola Mundo";
    //mensaje = (typeof mensaje !== "undefined") ? mensaje : "Hola Mundo 2222";
    setTimeout(
        function () {
            console.log(mensaje);
        }, tiempo);
}
opcional();
//PUEDEN SER FUNCIONES, OBJETOS Y MÁS 
function masVal(fn = funcEjemplo, perrito = { nombre: "Puky" }) {
    console.log(typeof fn);
    if (typeof fn === "undefined") {
        console.error("No es una función");
        return;
    }
    fn();
    console.log(perrito);
}
//LOS PARAMETROS OPCIONALES NO SE VEN REFLEJADOS EN "ARGUMENTS"
function funcEjemplo() {
    console.log("Ejemplo de funcion opcional");
}
masVal();
//PARAMETROS REST
let alumnos = ["MASITA"];
let alumnos2;
function agregaAlumnos(arr_alumnos, ...alumnos) {
    console.log(arguments);
    for (let i = 0; i < alumnos.length; i++) {
        arr_alumnos.push(alumnos[i]);
    }
    return arr_alumnos;
}

alumnos2 = agregaAlumnos(alumnos, "HANNA", "MIMI", "ANORI");
console.log(alumnos2);