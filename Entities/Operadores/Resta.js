var IOperador = require('./IOperador');

class Resta extends IOperador {
    constructor() {
        super();
        // Implementation of constructor.
    }
    operar(x, y) {
        // Implementation of abstract method.
        console.log('Restar');
        this.x = x;
        this.y = y;
        this.resultado = x - y;
        return this.resultado;
    }

}

module.exports = Resta;
