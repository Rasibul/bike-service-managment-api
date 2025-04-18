import prisma from '../../utilities/prismaCLient';

const createBike = async (data: {
    brand: string;
    model: string;
    year: number;
    customerId: string;
}) => {
    // Optional: Validate customer existence
    const customer = await prisma.customer.findUnique({
        where: { customerId: data.customerId },
    });

    if (!customer) {
        return null;
    }

    const bike = await prisma.bike.create({ data });
    return bike;
};


const getAllBikes = async () => {
    const bikes = await prisma.bike.findMany();
    return bikes;
};

export const bikeService = {
    createBike,
    getAllBikes,
};