import express from 'express';
import cors from 'cors';
import { customerRoutes } from './app/modules/customer/customer.routes';
import globalErrorHandler from './app/errors/globalErrorHandler';




const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Bike Service Management Api  Sever Is Running!');
});


app.use('/api', customerRoutes);






app.use(globalErrorHandler);


export default app;
