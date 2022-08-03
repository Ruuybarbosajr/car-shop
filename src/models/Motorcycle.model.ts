import { Schema, model as mongooseCreateModel } from 'mongoose';
import MongoModel from './Model.abstract';
import { IMotorcycle } from '../interfaces/IMotorcycle';

const SchemaMotorcyle = new Schema<IMotorcycle>({
  buyValue: Number,
  category: String,
  color: String,
  engineCapacity: Number,
  model: String,
  status: Boolean,
  year: Number,
}, { versionKey: false });

export default class extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motorcycles', SchemaMotorcyle)) {
    super(model);
  }
}