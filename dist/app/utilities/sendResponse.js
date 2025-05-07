"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    var _a;
    res.status((_a = data === null || data === void 0 ? void 0 : data.statusCode) !== null && _a !== void 0 ? _a : 500).json({
        success: data.success,
        message: data.message,
        statusCode: data.statusCode,
        data: data.data,
    });
};
exports.default = sendResponse;
