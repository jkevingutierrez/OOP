class IOperador {
    constructor() {
        this.x;
        this.y;
        this.resultado;
    }

    // An abstract method.
    operar(x, y) {}

}

module.exports = IOperador;