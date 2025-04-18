import express from 'express';
import { serviceController } from './services.controller';



const router = express.Router();

router.post('/services', serviceController.createServiceRecordHandler);
router.get('/services', serviceController.getAllServiceRecordsHandler);
router.get('/services/:serviceId', serviceController.getServiceRecordByIdHandler)

export const serviceRoutes = router