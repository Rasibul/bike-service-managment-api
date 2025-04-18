
import express from 'express';
import { bikeController } from './bikes.controller';


const router = express.Router();

router.post('/bikes', bikeController.createBikeHandler);

router.get('/bikes', bikeController.getAllBikesHandler);

export const bikeRoutes = router;

