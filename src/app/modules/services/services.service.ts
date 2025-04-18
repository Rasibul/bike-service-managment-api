import prisma from "../../utilities/prismaCLient";

const createServiceRecord = async (data: {
    bikeId: string;
    serviceDate: Date;
    description: string;
    status: "PENDING" | "COMPLETED" | "CANCELLED"; // Replace with actual ServiceStatus enum values
}) => {
    const service = await prisma.serviceRecord.create({
        data: {
            ...data,
            status: data.status as any, // Cast to match the expected enum type
        },
    });
    return service;
};



const getAllServiceRecords = async () => {
    const services = await prisma.serviceRecord.findMany();
    return services;
};


export const serviceService = {
    createServiceRecord,
    getAllServiceRecords
};
