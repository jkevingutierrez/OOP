var AbstractOperador = require('./AbstractOperador');

class Potenciacion extends AbstractOperador {
    constructor() {
        super();
        // Implementation of constructor.
    }
    operar(x, y) {
        // Implementation of abstract method.
        console.log('Elevar');
        return Math.pow(x, y);
    }

}

module.exports = Potenciacion;
