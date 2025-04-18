// import prisma from "../../utilities/prismaCLient";

import prismaCLient from "../../utilities/prismaCLient";


const createCustomer = async (data: {
    name: string;
    email: string;
    phone: string;
}) => {
    const customer = await prismaCLient.customer.create({ data });
    return customer;
};

export const customerService = {
    createCustomer,
};


