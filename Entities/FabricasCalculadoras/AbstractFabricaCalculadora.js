class AbstractFabricaCalculadora {
    constructor() {
        if (this.constructor === AbstractFabricaCalculadora) {
            // Error Type 1. Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }
        //else (called from child)
        // Check if all instance methods are implemented.
        if (this.crearCalculadora === AbstractFabricaCalculadora.prototype.crearCalculadora) {
            // Error Type 4. Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method crearCalculadora.");
        }
    }

    // An abstract method.
    crearCalculadora() {
        // Error Type 6. The child has implemented this method but also called `super.foo()`.
        throw new TypeError("Do not call abstract method crearCalculadora from child.");
    }

}

module.exports = AbstractFabricaCalculadora;