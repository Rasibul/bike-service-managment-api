import express from 'express';
import { serviceController } from './services.controller';


const router = express.Router();

router.post('/services', serviceController.createServiceRecordHandler);
router.get('/services', serviceController.getAllServiceRecordsHandler);

export const serviceRoutes = router