//----------------------------------------------------------SECCION 2---------------------------------------------------
console.log("---------SECCION 2-------");
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
//----------------------------------------------------------SECCION 3-------------------------------------------------------
console.log("---------SECCION 3-------");
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
//----------------------------------------------------------SECCION 4-------------------------------------------------------
console.log("---------SECCION 4-------");
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

//OPERADOR SPREAD
//MANDA UN ARREGLO COMO CADA UNIDAD SEPARADA INDEPENDIENTE
let numeros = [1, 4, 76, 123, 74, 13, 74, 23, 2123];
//var max = Math.max.apply(Math, numeros);
let max = Math.max(...numeros);
console.log(max);

//USANDO SPREAD PARA EXTRAER SOLO LAS PROPIEDADES Y NO HACER UNA REFERENCIA A LA DIRECCION DE MEMORIA
let persona2 = { ...PERSONA };
persona2.rank = "platino";
console.log(PERSONA);
console.log(persona2);

//USO DE SPREAD
//PARA AGREGAR PROPIEDADES DE OTRO OBJETO, PERO MANTENER EL VALOR DE LAS ORIGINALES COMPARTIDAS
let persona3 = { nombre: "HANNACAT", rank: "diamante", rp: "1999", ea: "18000" };
persona2 = { ...persona3, ...persona2 };
console.log(persona3);
console.log(persona2);

//USO DE REST
function usodeREST(saludo, ...nombres) {
    for (i in nombres) {
        console.log(`${saludo} ${nombres[i]}`);
    }
}
usodeREST("HOLA", "HANNITA", "MIMI", "MASITA");

//LLAMAR FUNCIONES CON NEW Y SIN
//PARA CREAR OBJETOS ES NECESARIO UTILIZAR NEW PARA LLAMAR FUNCIONES CON ESE PROPOSITO
//SE UTILIZA NEW.TARGET EN LUGAR DE INSTANCEOF PARA QUE AUN SI UTILIZAN .CALL SI NO FUE INSTANCIADO CON NEW
//SE INDIQUE EL ERROR
function usoNTgt(nombre) {
    if (typeof new.target != "undefined") {
        this.nombre = nombre;
    } else {
        throw new Error("Debe ser utilizada con el new");
    }

}
let siEs = new usoNTgt("ABEJA MAYA");
//let noEs = usoNTgt.call(siEs,"SCOOBYDOO");
//----------------------------------------------------------SECCION 5-------------------------------------------------------
console.log("---------SECCION 5-------");
//FUNCIONES FLECHA
var mifuncion1 = function (num1, num2) {
    return num1 + num2;
}
let mifuncion2 = (num1, num2) => num1 + num2;
console.log(mifuncion1());
console.log(mifuncion2());
//FUNCIONAN DIFERENTE PERO SIRVEN PARA LO MISMO
let saludarPersona = (nombre) => {
    let persona = `HOLA ${nombre}`;
    return persona;
}
console.log(saludarPersona("MAZATZIN"));
//PARA REGRESAR UN TIPO OBJETO
let regresaObj = id => ({ id: id, nombre: "GupyTheGU" });
console.log(regresaObj(2));

//FUNCIONES ANONIMAS
//SON EJECUTADAS AL MOMENTO DE SER CREADAS
let funcionANM = (nombre => `Saludos ${nombre}`)("Hanna Golden");
console.log(funcionANM); //NO SE PONEN LOS PARENTESIS AL LLAMARSE

//CAMBIANDO EL SCOPE DE THIS
var manejador = {
    id: "123",
    init: function () {
        //ES5
        // document.addEventListener("click", (function (event) {
        //     this.escuchaClick(event.type);
        // }).bind(this), false);

        //ES6
        document.addEventListener("click", event => this.escuchaClick(event.type), false);
    },
    escuchaClick: function (type) {
        console.log("Manejando " + type + " para el id " + this.id);
    }
};
manejador.init();