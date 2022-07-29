import { Schema, model as mongooseCreateModel } from 'mongoose';
import MongoModel from './Model.abstract';
import { ICar } from '../interfaces/ICar';

const SchemaCar = new Schema<ICar>({
  doorsQty: Number,
  seatsQty: Number,
  status: Boolean,
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
});

export default class extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Cars', SchemaCar)) {
    super(model);
  }
}