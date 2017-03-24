var AbstractCalculadora = require('./AbstractCalculadora');
var AbstractOperador = require('../Operadores/AbstractOperador');
var Division = require('../Operadores/Division');
var Multiplicacion = require('../Operadores/Multiplicacion');
var Resta = require('../Operadores/Resta');
var Suma = require('../Operadores/Suma');

class CalculadoraBasica extends AbstractCalculadora {
    constructor() {
        super();
        this.operador = null;
        // Implementation of constructor.
    }
    calcular(x, y, operador) {
        console.log(operador);
        // Implementation of abstract method.
        switch(operador) {
            case 'Division':
                this.operador = new Division();
                break;
            case 'Multiplicacion':
                this.operador = new Multiplicacion();
                break;
            case 'Resta':
                this.operador = new Resta();
                break;
            case 'Suma':
                this.operador = new Suma();
                break;
            default:
                console.error('Operador Invalido');
                break;
        }
        console.log('Operar con calculadora basica');
        if (this.operador) {
            return this.operador.operar(x, y);
        } else {
            return 'El operador no existe para esta calculadora';
        }
    }

}

module.exports = CalculadoraBasica;
