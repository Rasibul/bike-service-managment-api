import express from 'express';
import { customerController } from './customer.controller';
const router = express.Router();



router.post('/customer', customerController.createCustomerHandler);

router.get('/customers', customerController.getAllCustomersHandler);



export const customerRoutes = router;