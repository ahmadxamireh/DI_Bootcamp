import express from "express";
import * as Controller from '../controllers/booksController.js'

const router = express.Router();

router.get('/', Controller.getAllBooks);
router.get('/:id', Controller.getBookById);
router.post('/', Controller.createBook);
router.put('/:id', Controller.updateBook);
router.delete('/:id', Controller.deleteBook);

export default router;