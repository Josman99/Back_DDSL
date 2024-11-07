const personaRepository = require('../repositories/personaRepository');

class PersonaService {
    getAllPersona(){
        return personaRepository.findAll();
    }

    getPersonaById(id){
        return personaRepository.findById(id);
    }

    createPersona(userData){
        return personaRepository.create(userData);
    }

    updatePersona(id, userData){
        return personaRepository.update(id, userData);
    }

    deletePersona(id){
        return personaRepository.delete(id);
    }
}
module.exports = new PersonaService();