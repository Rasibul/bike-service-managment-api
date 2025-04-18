import express from 'express';
import { serviceController } from './services.controller';



const router = express.Router();

router.post('/services', serviceController.createServiceRecordHandler);
router.get('/services', serviceController.getAllServiceRecordsHandler);
router.get('/services/:serviceId', serviceController.getServiceRecordByIdHandler)
router.put('/services/:serviceId/complete', serviceController.completeServiceRecordHandler);
router.get('/status', serviceController.getPendingOrOverdueServicesHandler);

export const serviceRoutes = router