const CrudPersona = require('../lib/crudPersona');
const Persona = require('../models/persona');

class UserRepository extends CrudPersona {
    constructor(){
        super(Persona);
    }
}
module.exports = new UserRepository();