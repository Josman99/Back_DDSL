const RolRepository = require('../lib/crudRoles');
const Rol = require('../models/rol');

class rolRepository extends RolRepository {
    constructor(){
        super(Rol);
    }
}
module.exports = new rolRepository();