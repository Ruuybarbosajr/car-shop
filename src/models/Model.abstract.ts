import { Model, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';

export default abstract class MongoModel<T> implements IModel<T> {
  constructor(protected model: Model<T>) {}

  async create(obj: T): Promise<T> {
    return this.model.create(obj);
  }

  async update(_id: string, obj: T): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id }, 
      obj as UpdateQuery<T>,
      { new: true },
    );
  }

  async delete(_id: string): Promise<T | null> {
    return this.model.findByIdAndDelete(_id);
  }

  async read(): Promise<T[]> {
    return this.model.find();
  }

  async readOne(_id: string): Promise<T | null> {
    return this.model.findById(_id);
  }
}