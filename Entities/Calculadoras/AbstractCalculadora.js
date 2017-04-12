class AbstractCalculadora {
    constructor() {
        if (this.constructor === AbstractCalculadora) {
            // Error Type 1. Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }
        //else (called from child)
        // Check if all instance methods are implemented.
        if (this.calcular === AbstractCalculadora.prototype.calcular) {
            // Error Type 4. Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method calcular.");
        }
    }

    // An abstract method.
    calcular(x, y, operador) {
        // Error Type 6. The child has implemented this method but also called `super.foo()`.
        throw new TypeError("Do not call abstract method calcular from child.");
    }

}

module.exports = AbstractCalculadora;