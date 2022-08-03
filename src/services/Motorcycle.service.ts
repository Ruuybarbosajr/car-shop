import { IModel } from '../interfaces/IModel';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

export default class implements IService<IMotorcycle> {
  constructor(private _model: IModel<IMotorcycle>) {}

  async create(obj: IMotorcycle) {
    return this._model.create(obj);
  }

  async update(_id: string, obj: IMotorcycle): Promise<IMotorcycle | null> {
    return this._model.update(_id, obj);
  }

  async read(): Promise<IMotorcycle[]> {
    return this._model.read();
  }

  async readOne(_id: string): Promise<IMotorcycle | null> {
    return this._model.readOne(_id);
  }

  async delete(_id: string): Promise<IMotorcycle | null> {
    return this._model.delete(_id);
  }
}