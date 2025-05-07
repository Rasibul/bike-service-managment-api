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
exports.serviceController = void 0;
const catchAsync_1 = __importDefault(require("../../utilities/catchAsync"));
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../utilities/sendResponse"));
const services_service_1 = require("./services.service");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const createServiceRecordHandler = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bikeId, serviceDate, description, status } = req.body;
    // Create service record using the service layer
    const serviceRecord = yield services_service_1.serviceService.createServiceRecord({
        bikeId,
        serviceDate,
        description,
        status,
    });
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Service record created successfully',
        data: serviceRecord,
    });
}));
const getAllServiceRecordsHandler = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const services = yield services_service_1.serviceService.getAllServiceRecords();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Service records fetched successfully',
        data: services,
    });
}));
const getServiceRecordByIdHandler = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const service = yield services_service_1.serviceService.getServiceRecordById(serviceId);
    if (!service) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Service record not found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Service record fetched successfully',
        data: service,
    });
}));
const completeServiceRecordHandler = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const { completionDate } = req.body;
    // Use current time if no completionDate is provided
    const finalCompletionDate = completionDate || new Date();
    const service = yield services_service_1.serviceService.completeServiceRecord(serviceId, finalCompletionDate);
    if (!service) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Service record not found');
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Service marked as completed',
        data: service,
    });
}));
const getPendingOrOverdueServicesHandler = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    console.log(sevenDaysAgo);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const services = yield services_service_1.serviceService.getPendingOrOverdueServices(sevenDaysAgo);
    console.log(services);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Overdue or pending services fetched successfully',
        data: services,
    });
}));
exports.serviceController = {
    createServiceRecordHandler,
    getAllServiceRecordsHandler,
    getServiceRecordByIdHandler,
    completeServiceRecordHandler,
    getPendingOrOverdueServicesHandler,
};
