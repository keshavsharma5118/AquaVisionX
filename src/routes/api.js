import express from 'express';
import dataController from '../controllers/dataController.js';

const router = express.Router();

router.post('/sensor-data', dataController.createData);

export default router;
