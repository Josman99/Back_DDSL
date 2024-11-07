const express = require('express');
require('dotenv').config();
// const userController = require('./controllers/userController')
//const rolController = require('./controllers/rolController')
const personaController = require("./controllers/personaController")
const app = express();
app.use(express.json());
// app.use('/api/users', userController);
//app.use('/api/users', rolController);
app.use('/api/users', personaController);

const port= process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`servidor corriendo en http://localhost:${port}`)
})