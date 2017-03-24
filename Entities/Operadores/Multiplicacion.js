var AbstractOperador = require('./AbstractOperador');

class Multiplicacion extends AbstractOperador {
    constructor() {
        super();
        // Implementation of constructor.
    }
    operar(x, y) {
        // Implementation of abstract method.
        console.log('Multiplicar');
        return x * y;
    }

}

module.exports = Multiplicacion;
