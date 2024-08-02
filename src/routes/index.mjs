import express from 'express';
import sensorDataRoutes from './api.js';

const router = express.Router();

router.use('/sensor-data', sensorDataRoutes);

export default router;
