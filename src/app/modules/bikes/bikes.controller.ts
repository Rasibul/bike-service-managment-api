import { Request, Response } from 'express';
import catchAsync from '../../utilities/catchAsync';
import httpStatus from "http-status";
import sendResponse from '../../utilities/sendResponse';
import AppError from '../../errors/AppError';
import { bikeService } from './bikes.service';


const createBikeHandler = catchAsync(async (req: Request, res: Response) => {
    const bike = await bikeService.createBike(req.body);

    if (!bike) {
        throw new AppError(httpStatus.NOT_FOUND, 'Customer not found');
    }

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Bike added successfully',
        data: bike,
    });
});

const getAllBikesHandler = catchAsync(async (_req: Request, res: Response) => {
    const bikes = await bikeService.getAllBikes();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bikes fetched successfully',
        data: bikes,
    });
});


export const bikeController = {
    createBikeHandler,
    getAllBikesHandler,
};