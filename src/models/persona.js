class Persona {
    static tableName = 'persona';

    constructor(id, dni, edad) {
        this.id = id;
        this.dni = dni;
        this.edad = edad;
    }
}
module.exports = Persona;