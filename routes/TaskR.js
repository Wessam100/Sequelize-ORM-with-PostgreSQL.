const express = require('express')
const {createTask, getall, getbyid , updateTask, deleteTask} = require('../controllers/taskController');

const router =express.Router();

router.post('/Task',createTask);
router.get('/Task',getall);
router.get('/Task/:id',getbyid);
router.put('/Task/:id',updateTask);
router.delete('/Task/:id',deleteTask);

module.exports =router;