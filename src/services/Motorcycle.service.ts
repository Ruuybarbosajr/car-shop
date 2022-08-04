import { ErrorType } from '../error/catalog';
import { IModel } from '../interfaces/IModel';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

export default class implements IService<IMotorcycle> {
  constructor(private _model: IModel<IMotorcycle>) {}

  async create(obj: IMotorcycle) {
    return this._model.create(obj);
  }

  async update(_id: string, obj: IMotorcycle): Promise<IMotorcycle | null> {
    const motorcycleUpdated = await this._model.update(_id, obj);
    if (!motorcycleUpdated) throw new Error(ErrorType.EntityNotFound);
    return motorcycleUpdated;
  }

  async read(): Promise<IMotorcycle[]> {
    return this._model.read();
  }

  async readOne(_id: string): Promise<IMotorcycle | null> {
    const findMotorcycle = await this._model.readOne(_id);
    if (!findMotorcycle) throw new Error(ErrorType.EntityNotFound);
    return findMotorcycle;
  }

  async delete(_id: string): Promise<IMotorcycle | null> {
    const carDeleted = await this._model.delete(_id);
    if (!carDeleted) throw new Error(ErrorType.EntityNotFound);
    return carDeleted;
  }
}