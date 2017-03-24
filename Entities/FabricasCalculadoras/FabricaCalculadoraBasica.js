var AbstractFabricaCalculadora = require('./AbstractFabricaCalculadora');
var AbstractCalculadora = require('../Calculadoras/AbstractCalculadora');
var CalculadoraBasica = require('../Calculadoras/CalculadoraBasica');

class FabricaCalculadoraBasica extends AbstractFabricaCalculadora {
    constructor() {
        super();
        this.calculadora = null;
        // Implementation of constructor.
    }
    crearCalculadora() {
        // Implementation of abstract method.
        console.log('Crear Calculadora Basica');
        this.calculadora = new CalculadoraBasica();
        return this.calculadora;
    }

}

module.exports = FabricaCalculadoraBasica;
