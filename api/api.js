const TaskController = require('../controllers/todolist');
const express = require('express');


const router = express.Router(); // Crea una ruta para que el API salga

router.get("/all", TaskController.findAllTodoList);

router.post("/add", TaskController.addTask);


module.exports = router;