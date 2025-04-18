import express from 'express';
import { customerController } from './customer.controller';
const router = express.Router();



router.post('/customer', customerController.createCustomerHandler);

router.get('/customers', customerController.getAllCustomersHandler);

router.get('/customer/:customerId', customerController.getSingleCustomerHandler);

router.put('/customers/:customerId', customerController.updateSingleCustomerHandler);

router.delete('/customers/:customerId', customerController.deleteSingleCustomerHandler);



export const customerRoutes = router;