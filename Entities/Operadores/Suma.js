var AbstractOperador = require('./AbstractOperador');

class Suma extends AbstractOperador {
    constructor() {
        super();
        // Implementation of constructor.
    }
    operar(x, y) {
        // Implementation of abstract method.
        console.log('Sumar');
        return x + y;
    }

}

module.exports = Suma;
