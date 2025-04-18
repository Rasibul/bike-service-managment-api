
import express from 'express';
import { bikeController } from './bikes.controller';


const router = express.Router();

router.post('/bikes', bikeController.createBikeHandler);

export const bikeRoutes = router;

