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
exports.bikeService = void 0;
const prismaCLient_1 = __importDefault(require("../../utilities/prismaCLient"));
const createBike = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // Optional: Validate customer existence
    const customer = yield prismaCLient_1.default.customer.findUnique({
        where: { customerId: data.customerId },
    });
    if (!customer) {
        return null;
    }
    const bike = yield prismaCLient_1.default.bike.create({ data });
    return bike;
});
const getAllBikes = () => __awaiter(void 0, void 0, void 0, function* () {
    const bikes = yield prismaCLient_1.default.bike.findMany();
    return bikes;
});
const getSingleBike = (bikeId) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = yield prismaCLient_1.default.bike.findUnique({
        where: { bikeId },
    });
    return bike;
});
exports.bikeService = {
    createBike,
    getAllBikes,
    getSingleBike,
};
