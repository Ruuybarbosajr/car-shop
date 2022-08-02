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
  (req, res) => controller.create(req, res),
);

router.get(
  '/:id',
  validIdMongo,
  (req, res) => controller.readOne(req, res),
);

router.get(
  '/',
  (req, res) => controller.read(req, res),
);

router.put(
  '/:id',
  validIdMongo,
  validateBodyCar,
  (req, res) => controller.update(req, res),
);

export default router;