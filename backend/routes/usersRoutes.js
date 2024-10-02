const express = require('express')
const router = express.Router()
const { registrarUser,
    loginUser,
    misDatos } = require('../controllers/userController')


//Registrar un usuario
router.post('/', registrarUser)

//Hacer login a un usuario
router.post('/login', loginUser)

//Mostrar datos de un usuario
router.get('/data', misDatos)

module.exports = router