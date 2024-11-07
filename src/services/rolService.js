const rolRepository = require('../repositories/rolRepository');
class RolService {
    getAllRoles(){
        return rolRepository.findAll();
    }

    getRolById(id){
        return rolRepository.findById(id);
    }

    createRol(rolData){
        return rolRepository.create(rolData);
    }

    updateRol(id, rolData){
        return rolRepository.update(id, rolData);
    }

    deleteRol(id){
        return rolRepository.delete(id);
    }
}
module.exports = new RolService();