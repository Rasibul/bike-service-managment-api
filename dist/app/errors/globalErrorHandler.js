"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || http_status_1.default.INTERNAL_SERVER_ERROR;
    const message = err.message || 'Something went wrong';
    res.status(statusCode).json(Object.assign({ success: false, status: statusCode, message }, (process.env.NODE_ENV === 'development' && { stack: err.stack })));
};
exports.default = globalErrorHandler;
