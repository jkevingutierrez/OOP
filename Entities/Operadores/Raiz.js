var IOperador = require('./IOperador');

class Raiz extends IOperador {
    constructor() {
        super();
        // Implementation of constructor.
    }
    operar(x, y) {
        // Implementation of abstract method.
        console.log('Raiz');
        this.x = x;
        this.y = y;
        this.resultado = Math.pow(x, 1 / y);
        if (x < 0) {
            return 'Raiz de un numero negativo no existe';
        }
        return this.resultado;
    }

}

module.exports = Raiz;
