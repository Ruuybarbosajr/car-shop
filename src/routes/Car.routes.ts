import express from 'express';
import CarModel from '../models/Car.model';
import CarService from '../services/Car.service';
import CarController from '../controllers/Car.controller';
import validateBodyCar from '../middleware/validateBodyCar';
import validIdMongo from '../middleware/validateIdCar';

const router = express.Router();

const model = new CarModel();
const service = new CarService(model);
const controller = new CarController(service);

router.post(
  '/',
  validateBodyCar,
  (req, res, next) => controller.create(req, res, next),
);

router.get(
  '/:id',
  validIdMongo,
  (req, res, next) => controller.readOne(req, res, next),
);

router.get(
  '/',
  (req, res, next) => controller.read(req, res, next),
);

export default router;