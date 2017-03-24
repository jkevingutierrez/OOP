var AbstractOperador = require('./AbstractOperador');

class Resta extends AbstractOperador {
    constructor() {
        super();
        // Implementation of constructor.
    }
    operar(x, y) {
        // Implementation of abstract method.
        console.log('Restar');
        return x - y;
    }

}

module.exports = Resta;
