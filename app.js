const mate = require('./mate.js');
const readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var calcular = function(){
    rl.question(
    `Elegir el numero de la operacion a usar
    1) *
    2) +
    3) -
    4) /
    5) %
    *) Cualquier otro numero para salir

    `, function(operacion) {
        if(operacion !== "1" && operacion !== "2" && operacion != "3" && operacion != "4" && operacion != "5"){
            return rl.close();
        }
        rl.question("Ingresa un numero: ", a =>{
            rl.question("Ingresa un numero ", b => {
                if(operacion == "1"){
                    console.log("la respuesta de la multiplicacion es: " + mate.mult(a,b))
                }else if (operacion == "2"){
                    console.log("la respuesta de la suma es: " + mate.suma(a,b))
                }else if (operacion == "3"){
                    console.log("la respuesta de la resta es: " + mate.resta(a,b))
                }else if (operacion == "4"){
                    console.log("la respuesta de la division es: " + mate.division(a,b))
                }else if (operacion == "5"){
                    console.log("la respeusta del modulo es: " + mate.modulo(a,b))
                }
                calcular();
            });
        });
    });
};

console.log("calculadora simple")
calcular();
