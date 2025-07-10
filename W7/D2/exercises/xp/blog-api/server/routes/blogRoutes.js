import express from "express";
import * as Controller from '../controllers/blogControllers.js'

const router = express.Router();

router.get('/', Controller.getAll);
router.get('/:id', Controller.getById);
router.post('/', Controller.createPost);
router.put('/:id', Controller.updatePost);
router.delete('/:id', Controller.deletePost);

export default router;