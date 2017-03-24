var AbstractOperador = require('./AbstractOperador');

class Division extends AbstractOperador {
    constructor() {
        super();
        // Implementation of constructor.
    }
    operar(x, y) {
        // Implementation of abstract method.
        console.log('Dividir');
        return x / y;
    }

}

module.exports = Division;
