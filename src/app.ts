import express from 'express';
import error from './middleware/error';
import routerCar from './routes/Car.routes';
import routerMotorcycle from './routes/Motorcycle.routes';

const app = express();

app.use(express.json());
app.use('/cars', routerCar);
app.use('/motorcycles', routerMotorcycle);
app.use(error);

export default app;
