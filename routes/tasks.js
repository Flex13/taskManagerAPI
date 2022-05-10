const express = require('express')
const router = express.Router()

//Get Data from Controller
const { getAllTasks, createTask, getTask, deleteTask, updateTask } = require('../controllers/tasks')

//Get all Tasks and Create Task
router.route('/').get(getAllTasks).post(createTask)

//Get Task, Update Task and Delete Task
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router