class AbstractOperador {
    constructor() {
        if (this.constructor === AbstractOperador) {
            // Error Type 1. Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }
        //else (called from child)
        // Check if all instance methods are implemented.
        if (this.operar === AbstractOperador.prototype.operar) {
            // Error Type 4. Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method operar.");
        }
    }

    // An abstract method.
    operar(x, y) {
        // Error Type 6. The child has implemented this method but also called `super.operar()`.
        throw new TypeError("Do not call abstract method operar from child.");
    }

}

module.exports = AbstractOperador;