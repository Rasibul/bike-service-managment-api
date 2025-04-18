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


const getServiceRecordById = async (serviceId: string) => {
    const service = await prisma.serviceRecord.findUnique({
        where: { serviceId },
    });
    return service;
};


const completeServiceRecord = async (serviceId: string, completionDate: Date) => {
    const service = await prisma.serviceRecord.update({
        where: { serviceId },
        data: {
            status: 'done',
            completionDate,
        },
    });
    return service;
};

export const serviceService = {
    createServiceRecord,
    getAllServiceRecords,
    getServiceRecordById,
    completeServiceRecord,
};
