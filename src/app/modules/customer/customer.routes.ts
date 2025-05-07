import express from 'express';
import { customerController } from './customer.controller';
const router = express.Router();



router.post('/customers', customerController.createCustomerHandler);

router.get('/customers', customerController.getAllCustomersHandler);

router.get('/customers/:customerId', customerController.getSingleCustomerHandler);

router.put('/customers/:customerId', customerController.updateSingleCustomerHandler);

router.delete('/customers/:customerId', customerController.deleteSingleCustomerHandler);



export const customerRoutes = router;