var funciones = [];
const PERSONA = {
    nombre:"GupyTheGU",
    rank:"Plata"
};

for (let i = 0; i < 10; i++) {
    funciones.push(function () { console.log(i); });
    // funciones.push(
    //     (function (valor) {
    //         return function () { console.log(valor) };
    //     })(i)
    // );
}

funciones.forEach(
    function (func) {
        func();
    }
);
console.log(PERSONA);





