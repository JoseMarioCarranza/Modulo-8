const asyncHandler = require('express-async-handler')

const getTareas = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Obtener Tareas' })
})

const setTareas = asyncHandler(async (req, res) => {
    if (!req.body.texto) {
        res.status(400)
        throw new Error("por favor teclea una descripción")
    }
    res.status(201).json({ message: 'Crear Tareas' })
})

const updateTareas = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Modificar la tarea número ${req.params.id}` })
})

const deleteTareas = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Se elimino la tarea número ${req.params.id}` })
})

module.exports = {
    getTareas,
    setTareas,
    updateTareas,
    deleteTareas
}