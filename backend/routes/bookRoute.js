import express from  'express';
import * as bookController from '../controller/bookController.js';

const router =express.Router();

router.use('/',bookController.getAllBooks);

export default router;