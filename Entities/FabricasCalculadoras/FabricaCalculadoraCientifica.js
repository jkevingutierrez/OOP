var AbstractFabricaCalculadora = require('./AbstractFabricaCalculadora');
var AbstractCalculadora = require('../Calculadoras/AbstractCalculadora');
var CalculadoraCientifica = require('../Calculadoras/CalculadoraCientifica');

class FabricaCalculadoraCientifica extends AbstractFabricaCalculadora {
    constructor() {
        super();
        this.calculadora = null;
        // Implementation of constructor.
    }
    crearCalculadora() {
        // Implementation of abstract method.
        console.log('Crear Calculadora Cientifica');
        this.calculadora = new CalculadoraCientifica();
        return this.calculadora;
    }

}

module.exports = FabricaCalculadoraCientifica;
