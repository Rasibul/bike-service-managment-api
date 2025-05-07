"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const services_controller_1 = require("./services.controller");
const router = express_1.default.Router();
router.post('/services', services_controller_1.serviceController.createServiceRecordHandler);
router.get('/services', services_controller_1.serviceController.getAllServiceRecordsHandler);
router.get('/services/:serviceId', services_controller_1.serviceController.getServiceRecordByIdHandler);
router.put('/services/:serviceId/complete', services_controller_1.serviceController.completeServiceRecordHandler);
router.get('/status', services_controller_1.serviceController.getPendingOrOverdueServicesHandler);
exports.serviceRoutes = router;
