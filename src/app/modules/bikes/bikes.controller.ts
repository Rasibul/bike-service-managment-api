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
        success: true,
        message: 'Bike added successfully',
        data: bike,
    });
});

const getAllBikesHandler = catchAsync(async (_req: Request, res: Response) => {
    const bikes = await bikeService.getAllBikes();

    sendResponse(res, {
        success: true,
        message: 'Bikes fetched successfully',
        data: bikes,
    });
});


const getSingleBikeHandler = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const bike = await bikeService.getSingleBike(id);

    if (!bike) {
        throw new AppError(httpStatus.NOT_FOUND, 'Bike not found');
    }

    sendResponse(res, {
        success: true,
        message: 'Bike fetched successfully',
        data: bike,
    });
});


export const bikeController = {
    createBikeHandler,
    getAllBikesHandler,
    getSingleBikeHandler,
};