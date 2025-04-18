// import prisma from "../../utilities/prismaCLient";

import prisma from "../../utilities/prismaCLient";




const createCustomer = async (data: {
    name: string;
    email: string;
    phone: string;
}) => {
    const customer = await prisma.customer.create({ data });
    return customer;
};


const getAllCustomers = async () => {
    return prisma.customer.findMany({ orderBy: { createdAt: 'desc' } });
};


export const customerService = {
    createCustomer,
    getAllCustomers,
};


