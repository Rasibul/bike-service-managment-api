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
exports.customerController = void 0;
const customer_service_1 = require("./customer.service");
const catchAsync_1 = __importDefault(require("../../utilities/catchAsync"));
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../utilities/sendResponse"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const createCustomerHandler = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield customer_service_1.customerService.createCustomer(req.body);
    if (!customer) {
        throw new AppError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Failed to create customer');
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Customer created successfully',
        data: customer,
    });
}));
const getAllCustomersHandler = (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield customer_service_1.customerService.getAllCustomers();
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Customers fetched successfully',
        data: customers,
    });
}));
const getSingleCustomerHandler = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    const customer = yield customer_service_1.customerService.getSingleCustomer(customerId);
    if (!customer) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Customer not found');
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Customer fetched successfully',
        data: customer,
    });
}));
const updateSingleCustomerHandler = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    const updatedCustomer = yield customer_service_1.customerService.updateSingleCustomer(customerId, req.body);
    if (!updatedCustomer) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Customer not found or update failed');
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Customer updated successfully',
        data: updatedCustomer,
    });
}));
const deleteSingleCustomerHandler = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    const deleted = yield customer_service_1.customerService.deleteSingleCustomer(customerId);
    if (!deleted) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Customer not found');
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Customer deleted successfully',
    });
}));
exports.customerController = {
    createCustomerHandler,
    getAllCustomersHandler,
    getSingleCustomerHandler,
    updateSingleCustomerHandler,
    deleteSingleCustomerHandler,
};
