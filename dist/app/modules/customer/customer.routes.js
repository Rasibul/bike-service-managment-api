"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const router = express_1.default.Router();
router.post('/customer', customer_controller_1.customerController.createCustomerHandler);
router.get('/customers', customer_controller_1.customerController.getAllCustomersHandler);
router.get('/customer/:customerId', customer_controller_1.customerController.getSingleCustomerHandler);
router.put('/customers/:customerId', customer_controller_1.customerController.updateSingleCustomerHandler);
router.delete('/customers/:customerId', customer_controller_1.customerController.deleteSingleCustomerHandler);
exports.customerRoutes = router;
