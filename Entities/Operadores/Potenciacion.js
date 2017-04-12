var IOperador = require('./IOperador');

class Potenciacion extends IOperador {
    constructor() {
        super();
        // Implementation of constructor.
    }
    operar(x, y) {
        // Implementation of abstract method.
        console.log('Elevar');
        this.x = x;
        this.y = y;
        this.resultado = Math.pow(x, y);
        return this.resultado;
    }

}

module.exports = Potenciacion;
