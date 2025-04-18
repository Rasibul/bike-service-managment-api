"use strict";
// import prisma from "../../utilities/prismaCLient";
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
exports.customerService = void 0;
const prismaCLient_1 = __importDefault(require("../../utilities/prismaCLient"));
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prismaCLient_1.default.customer.create({ data });
    return customer;
});
const getAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    return prismaCLient_1.default.customer.findMany({ orderBy: { createdAt: 'desc' } });
});
const getSingleCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    return prismaCLient_1.default.customer.findUnique({
        where: { customerId },
    });
});
const updateSingleCustomer = (customerId, data) => __awaiter(void 0, void 0, void 0, function* () {
    // check if customer exists first
    const isCustomerExist = yield prismaCLient_1.default.customer.findUnique({
        where: { customerId },
    });
    if (!isCustomerExist) {
        return null; // controller will handle this
    }
    // safe to update
    return prismaCLient_1.default.customer.update({
        where: { customerId },
        data,
    });
});
const deleteSingleCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const isCustomerExist = yield prismaCLient_1.default.customer.findUnique({
        where: { customerId },
    });
    if (!isCustomerExist) {
        return null;
    }
    yield prismaCLient_1.default.customer.delete({
        where: { customerId },
    });
    return true;
});
exports.customerService = {
    createCustomer,
    getAllCustomers,
    getSingleCustomer,
    updateSingleCustomer,
    deleteSingleCustomer,
};
