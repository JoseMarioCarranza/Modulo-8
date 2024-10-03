const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

const registrarUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Faltan datos favor de verificar")
    }

    // verificar si ese usuario ya existe
    const userExiste = await User.findOne({ email })

    if (userExiste) {
        res.status(400)
        throw new Error("Ese usuario ya existe en la base de datos, favor de elegir otro")
    }

    //hash al password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //crear el nuevo usuario
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            admin: user.esAdmin
        })
    } else {
        res.status(400)
        throw new Error("No se pudieron guardar los datos")
    }

})

const loginUser = asyncHandler(async (req, res) => {

    //destructuramos el body
    const { email, password } = req.body

    //verificar si el usuario existe
    const user = await User.findOne({ email })

    //verificamos que el usuario exista

    /*
        Se usa user.id en vez de user._id porque
        id regresa le id del usuario en formato string
        _id regresa un object id
        Si en algún momento queremos hacer alguna comparación el hecho de usar
        _id nos dara error
    */

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generarToken(user.id)
        })
    } else {
        res.status(400)
        throw new Error("Credenciales incorrectas")
    }
})

const misDatos = asyncHandler((req, res) => {
    res.status(200).json(req.user)
})

// función para generer un JWT
const generarToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}



module.exports = {
    registrarUser,
    loginUser,
    misDatos
}