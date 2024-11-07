const express = require('express');
const PersonaService = require('../services/personaService');

const router = express.Router();

router.get('/', async (req, res) => {
    const persona = await PersonaService.getAllPersona();
    res.json(persona);
})

router.get('/:id', async (req, res) => {
    const persona = await PersonaService.getPersonaById(req.params.id);
    if (persona) {
        res.json(persona);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
})
router.post('/', async (req, res) => {
    const newPersona = await PersonaService.createPersona(req.body);
    if (newPersona)
        res.status(201).json(newPersona);
    else
        res.status(404).json({ message: 'User not registred' });
})
router.put('/:id', async (req, res) => {
    const updatePersona = await PersonaService.updatePersona(
        req.params.id,req.body);
    if (updatePersona)
        res.status(201).json(updatePersona);
    else
        res.status(404).json({ message: 'User not updated' });
})

router.delete('/:id', async(req,res)=>{
    const deletedPersona = await PersonaService.deletePersona(req.params.id);
    if(deletedPersona){
        res.status(204).send();
    } else {
        res.status(404).json({message:'User dont delete'});
    }
})


module.exports = router;