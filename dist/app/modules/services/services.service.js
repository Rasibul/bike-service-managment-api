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
exports.serviceService = void 0;
const prismaCLient_1 = __importDefault(require("../../utilities/prismaCLient"));
const createServiceRecord = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield prismaCLient_1.default.serviceRecord.create({
        data: Object.assign(Object.assign({}, data), { status: data.status }),
    });
    return service;
});
const getAllServiceRecords = () => __awaiter(void 0, void 0, void 0, function* () {
    const services = yield prismaCLient_1.default.serviceRecord.findMany();
    return services;
});
const getServiceRecordById = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield prismaCLient_1.default.serviceRecord.findUnique({
        where: { serviceId },
    });
    return service;
});
const completeServiceRecord = (serviceId, completionDate) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield prismaCLient_1.default.serviceRecord.update({
        where: { serviceId },
        data: {
            status: 'done',
            completionDate,
        },
    });
    return service;
});
const getPendingOrOverdueServices = (sevenDaysAgo) => __awaiter(void 0, void 0, void 0, function* () {
    return prismaCLient_1.default.serviceRecord.findMany({
        where: {
            status: {
                in: ['pending', 'in_progress'],
            },
            serviceDate: {
                lt: sevenDaysAgo,
            },
        },
    });
});
exports.serviceService = {
    createServiceRecord,
    getAllServiceRecords,
    getServiceRecordById,
    completeServiceRecord,
    getPendingOrOverdueServices,
};
