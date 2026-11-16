import * as bookcontrollers from '../controllers/bookcontrollers.js';
import express from 'express';

const bookroutes = express.Router();

bookroutes.get('/', bookcontrollers.fetchAllBooks);
bookroutes.post('/', bookcontrollers.createBooks);
bookroutes.put('/:id', bookcontrollers.editBooks);
bookroutes.delete('/:id', bookcontrollers.deleteBooks);

export default bookroutes;