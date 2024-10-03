const express = require('express')
const router = express.Router()
const { registrarUser, loginUser, misDatos } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

//Publico
//Registrar un usuario
router.post('/', registrarUser)

//Hacer login a un usuario
router.post('/login', loginUser)

//Privado
//Mostrar datos de un usuario
router.get('/data', protect, misDatos)

module.exports = router