import express from 'express';
import error from './middleware/error';
import routerCar from './routes/Car.routes';

const app = express();

app.use(express.json());
app.use('/cars', routerCar);
app.use(error);

export default app;
