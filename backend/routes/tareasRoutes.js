const express = require('express')
const router = express.Router()
const { getTareas, setTareas, updateTareas, deleteTareas } = require('../controllers/tareasController')

router.route('/').get(getTareas).post(setTareas)

router.route('/:id').put(updateTareas).delete(deleteTareas)



module.exports = router