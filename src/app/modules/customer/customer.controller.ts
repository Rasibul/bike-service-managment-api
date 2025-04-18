import { Request, Response } from 'express';
import { customerService } from './customer.service';



const createCustomerHandler = async (req: Request, res: Response) => {
    try {
        const customer = await customerService.createCustomer(req.body);
        return res.status(201).json({
            success: true,
            message: 'Customer created successfully',
            data: customer,
        });
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Failed to create customer',
            error: error.message,
        });
    }
};

export const customerController = {
    createCustomerHandler,
};

