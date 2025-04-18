import { Request, Response } from 'express';
import { customerService } from './customer.service';
import catchAsync from '../../utilities/catchAsync';
import httpStatus from "http-status";
import sendResponse from '../../utilities/sendResponse';
import AppError from '../../errors/AppError';



const createCustomerHandler = catchAsync(async (req: Request, res: Response) => {
    const customer = await customerService.createCustomer(req.body);

    if (!customer) {
        throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to create customer');
    }

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Customer created successfully',
        data: customer,
    });
});


const getAllCustomersHandler = catchAsync(async (_req: Request, res: Response) => {
    const customers = await customerService.getAllCustomers();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Customers fetched successfully',
        data: customers,
    });
});

const getSingleCustomerHandler = catchAsync(async (req: Request, res: Response) => {
    const { customerId } = req.params;
    const customer = await customerService.getSingleCustomer(customerId);

    if (!customer) {
        throw new AppError(httpStatus.NOT_FOUND, 'Customer not found');
    }

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Customer fetched successfully',
        data: customer,
    });
});


const updateSingleCustomerHandler = catchAsync(async (req: Request, res: Response) => {
    const { customerId } = req.params;
    const updatedCustomer = await customerService.updateSingleCustomer(customerId, req.body);

    if (!updatedCustomer) {
        throw new AppError(httpStatus.NOT_FOUND, 'Customer not found or update failed');
    }

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Customer updated successfully',
        data: updatedCustomer,
    });
});


export const customerController = {
    createCustomerHandler,
    getAllCustomersHandler,
    getSingleCustomerHandler,
    updateSingleCustomerHandler,
};

