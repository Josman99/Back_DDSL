const express = require('express');
const rolService = require('../services/rolService');
const router = express.Router();

router.get('/', async (req, res) => {
    const rol = await rolService.getAllRoles();
    res.json(rol);
})

//esto de abajo falta modificar
router.get('/:id', async (req, res) => {
    const rol = await rolService.getUserById(req.params.id);
    if (rol) {
        res.json(rol);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
})
router.post('/', async (req, res) => {
    const newRol = await rolService.createRol(req.body);
    if (newRol)
        res.status(201).json(newRol);
    else
        res.status(404).json({ message: 'Rol not registred' });
})
router.put('/:id', async (req, res) => {
    const updateRol = await rolService.updateRol(req.params.id,req.body);
    if (updateRol)
        res.status(201).json(updateRol);
    else
        res.status(404).json({ message: 'User not updated' });
})

router.delete('/:id', async(req,res)=>{
    const deleteRol = await rolService.deleteRol(req.params.id);
    if(deleteRol){
        res.status(204).send();
    } else {
        res.status(404).json({message:'User dont delete'});
    }
})


module.exports = router;