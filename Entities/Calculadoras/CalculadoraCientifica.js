var AbstractCalculadora = require('./AbstractCalculadora');
var AbstractOperador = require('../Operadores/AbstractOperador');
var Division = require('../Operadores/Division');
var Multiplicacion = require('../Operadores/Multiplicacion');
var Potenciacion = require('../Operadores/Potenciacion');
var Raiz = require('../Operadores/Raiz');
var Resta = require('../Operadores/Resta');
var Suma = require('../Operadores/Suma');

class CalculadoraCientifica extends AbstractCalculadora {
    constructor() {
        super();
        this.operador = null;
        // Implementation of constructor.
    }
    calcular(x, y, operador) {
        // Implementation of abstract method.
        switch(operador) {
            case 'Division':
                this.operador = new Division();
                break;
            case 'Multiplicacion':
                this.operador = new Multiplicacion();
                break;
            case 'Potenciacion':
                this.operador = new Potenciacion();
                break;
            case 'Raiz':
                this.operador = new Raiz();
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
        console.log(operador)
        console.log('Operar con calculadora cientifica');
        return this.operador.operar(x, y);
    }

}

module.exports = CalculadoraCientifica;
