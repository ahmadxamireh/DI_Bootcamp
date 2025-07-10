import express from 'express';
import * as Controller from './controller.js';

const router = express.Router();
router.use(express.json()); // parse JSON bodies

router.get('/', Controller.getAllTasks);
router.get('/:id', Controller.getTaskById);
router.post('/', Controller.createTask);
router.put('/:id', Controller.updateTask);
router.delete('/:id', Controller.deleteTask);

export default router;