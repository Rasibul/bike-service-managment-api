import { Request, Response } from 'express';
import catchAsync from '../../utilities/catchAsync';
import httpStatus from "http-status";
import sendResponse from '../../utilities/sendResponse';
import { serviceService } from './services.service';
import AppError from '../../errors/AppError';

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

const getServiceRecordByIdHandler = catchAsync(async (req: Request, res: Response) => {
    const { serviceId } = req.params;

    const service = await serviceService.getServiceRecordById(serviceId);

    if (!service) {
        throw new AppError(httpStatus.NOT_FOUND, 'Service record not found');
    }

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Service record fetched successfully',
        data: service,
    });
});


const completeServiceRecordHandler = catchAsync(async (req: Request, res: Response) => {
    const { serviceId } = req.params;
    const { completionDate } = req.body;

    // Use current time if no completionDate is provided
    const finalCompletionDate = completionDate || new Date();

    const service = await serviceService.completeServiceRecord(serviceId, finalCompletionDate);

    if (!service) {
        throw new AppError(httpStatus.NOT_FOUND, 'Service record not found');
    }

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Service marked as completed',
        data: service,
    });
});
const getPendingOrOverdueServicesHandler = catchAsync(async (req: Request, res: Response) => {
    const sevenDaysAgo = new Date();
    console.log(sevenDaysAgo);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const services = await serviceService.getPendingOrOverdueServices(sevenDaysAgo);
    console.log(services);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Overdue or pending services fetched successfully',
        data: services,
    });
});

export const serviceController = {
    createServiceRecordHandler,
    getAllServiceRecordsHandler,
    getServiceRecordByIdHandler,
    completeServiceRecordHandler,
    getPendingOrOverdueServicesHandler,
};
