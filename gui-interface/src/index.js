class NotImplemented extends Error {
    constructor(message = "", ...args) {
        super(message, ...args);
        var className = args && args[0] ? 'in ' + args[0] : '';
        this.message = message + " has not yet been implemented " + className;
    }
}

class MyInterface {
    // Declare your JS doc in the Interface to make it acceable while writing the Class and for later inheritance
    /**
     * Gives the sum of the given Numbers
     * @param {Number} a The first Number
     * @param {Number} b The second Number
     * @return {Number} The sum of the Numbers
     */
    sum(a, b) { throw new NotImplemented('sum(a, b)', this.constructor.name); }


    // delcare a warning generator to notice if a method of the interface is not overridden
    // Needs the function name of the Interface method or any String that gives you a hint ;)
    _WARNING(fName='unknown method') {
        throw Error('Error! Function "'+fName+'" is not overridden in '+this.constructor.name);
    }
}

class MyCorrectUsedClass extends MyInterface {
    // You can easy use the JS doc declared in the interface
    /** @inheritdoc */
    sum(a, b) {
        return a+b;
    }
}

class MyIncorrectUsedClass extends MyInterface {
    // not overriding the method sum(a, b)
}

/*
var c = new MyCorrectUsedClass()
console.log(c.sum(5,10))

var t = new MyIncorrectUsedClass()
console.log(t.sum(5,10))
*/

module.exports = {
    MyInterface,
    NotImplemented,
    MyCorrectUsedClass,
    MyIncorrectUsedClass
}