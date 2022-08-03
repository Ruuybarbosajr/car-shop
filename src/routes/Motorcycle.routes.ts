import express from 'express';
import MotorcycleModel from '../models/Motorcycle.model';
import MotorcycleController from '../controllers/Motorcycle.controller';
import MotorcycleService from '../services/Motorcycle.service';
import validateBodyMotorcycle from '../middleware/validateBodyMotorcycle';

const router = express.Router();

const model = new MotorcycleModel();
const service = new MotorcycleService(model);
const controller = new MotorcycleController(service);

router.post(
  '/',
  validateBodyMotorcycle,
  (req, res) => controller.create(req, res),
);

export default router;