var IOperador = require('./IOperador');

class Division extends IOperador {
    constructor() {
        super();
        // Implementation of constructor.
    }
    operar(x, y) {
        // Implementation of abstract method.
        console.log('Dividir');
        this.x = x;
        this.y = y;
        this.resultado = x / y;
        if (y === 0) {
            return 'Division por cero no permitida';
        }

       return this.resultado;
    }

}

module.exports = Division;
