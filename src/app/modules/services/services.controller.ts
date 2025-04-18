import { Request, Response } from 'express';
import catchAsync from '../../utilities/catchAsync';
import httpStatus from "http-status";
import sendResponse from '../../utilities/sendResponse';
import { serviceService } from './services.service';

const createServiceRecordHandler = catchAsync(async (req: Request, res: Response) => {
    const { bikeId, serviceDate, description, status } = req.body;

    // Create service record using the service layer
    const serviceRecord = await serviceService.createServiceRecord({
        bikeId,
        serviceDate,
        description,
        status,
    });

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Service record created successfully',
        data: serviceRecord,
    });
});

const getAllServiceRecordsHandler = catchAsync(async (req: Request, res: Response) => {
    const services = await serviceService.getAllServiceRecords();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Service records fetched successfully',
        data: services,
    });
});

export const serviceController = {
    createServiceRecordHandler,
    getAllServiceRecordsHandler,
};
