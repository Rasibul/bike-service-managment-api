"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bikes_controller_1 = require("./bikes.controller");
const router = express_1.default.Router();
router.post('/bikes', bikes_controller_1.bikeController.createBikeHandler);
router.get('/bikes', bikes_controller_1.bikeController.getAllBikesHandler);
router.get('/bikes/:id', bikes_controller_1.bikeController.getSingleBikeHandler);
exports.bikeRoutes = router;
