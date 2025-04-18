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


const getSingleCustomer = async (customerId: string) => {
    return prisma.customer.findUnique({
        where: { customerId },
    });
};

const updateSingleCustomer = async (
    customerId: string,
    data: Partial<{ name: string; email: string; phone: string }>
) => {
    // check if customer exists first
    const isCustomerExist = await prisma.customer.findUnique({
        where: { customerId },
    });

    if (!isCustomerExist) {
        return null; // controller will handle this
    }

    // safe to update
    return prisma.customer.update({
        where: { customerId },
        data,
    });
};





export const customerService = {
    createCustomer,
    getAllCustomers,
    getSingleCustomer,
    updateSingleCustomer,
};


