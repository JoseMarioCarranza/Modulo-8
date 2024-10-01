const asyncHandler = require('express-async-handler')
const Tarea = require('../model/tareasModel')

const getTareas = asyncHandler(async (req, res) => {
    const tareas = await Tarea.find()
    res.status(200).json(tareas)
})

const setTareas = asyncHandler(async (req, res) => {
    if (!req.body.texto) {
        res.status(400)
        throw new Error("por favor teclea una descripción")
    }

    const tarea = await Tarea.create({
        texto: req.body.texto,
    })

    res.status(201).json({ tarea })
})

const updateTareas = asyncHandler(async (req, res) => {

    const tarea = await Tarea.findById(req.params.id)

    if (!tarea) {
        res.status(404)
        throw new Error("tarea no encontrada")
    }

    const tareaUpadated = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(tareaUpadated)
})

const deleteTareas = asyncHandler(async (req, res) => {

    const tarea = await Tarea.findById(req.params.id)

    if (!tarea) {
        res.status(404)
        throw new Error("tarea no encontrada")
    }

    await Tarea.deleteOne(tarea)

    //Este es otro metodo que podríamos utilizar pero no esta eficiente dado que tendríamos que hacer
    //una búsqueda en la base de datos para eliminarlo cosa que ya realizamos anterior mente
    //await Tarea.findByIdAndDelete(req.params.id)

    res.status(200).json({ id: tarea.id })
})

module.exports = {
    getTareas,
    setTareas,
    updateTareas,
    deleteTareas
}