"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeController = void 0;
const catchAsync_1 = __importDefault(require("../../utilities/catchAsync"));
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../utilities/sendResponse"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const bikes_service_1 = require("./bikes.service");
const createBikeHandler = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = yield bikes_service_1.bikeService.createBike(req.body);
    if (!bike) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Customer not found');
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Bike added successfully',
        data: bike,
    });
}));
const getAllBikesHandler = (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikes = yield bikes_service_1.bikeService.getAllBikes();
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Bikes fetched successfully',
        data: bikes,
    });
}));
const getSingleBikeHandler = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const bike = yield bikes_service_1.bikeService.getSingleBike(id);
    if (!bike) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Bike not found');
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Bike fetched successfully',
        data: bike,
    });
}));
exports.bikeController = {
    createBikeHandler,
    getAllBikesHandler,
    getSingleBikeHandler,
};
