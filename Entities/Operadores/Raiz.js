var AbstractOperador = require('./AbstractOperador');

class Raiz extends AbstractOperador {
    constructor() {
        super();
        // Implementation of constructor.
    }
    operar(x, y) {
        // Implementation of abstract method.
        console.log('Raiz');
        return Math.pow(x, 1 / y);
    }

}

module.exports = Raiz;
