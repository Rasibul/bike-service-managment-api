"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const customer_routes_1 = require("./app/modules/customer/customer.routes");
const globalErrorHandler_1 = __importDefault(require("./app/errors/globalErrorHandler"));
const bikes_routes_1 = require("./app/modules/bikes/bikes.routes");
const services_routes_1 = require("./app/modules/services/services.routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Bike Service Management Api  Sever Is Running!');
});
app.use('/api', customer_routes_1.customerRoutes);
app.use('/api', bikes_routes_1.bikeRoutes);
app.use('/api', services_routes_1.serviceRoutes);
app.use(globalErrorHandler_1.default);
exports.default = app;
