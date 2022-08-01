import { ErrorType } from '../error/catalog';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

export default class implements IService<ICar> {
  constructor(private _model: IModel<ICar>) {}

  async create(obj: ICar): Promise<ICar> {
    return this._model.create(obj);
  }

  // async update(_id: string, obj: ICar): Promise<ICar | null> {
  // }

  async read(): Promise<ICar[]> {
    return this._model.read();
  }

  async readOne(_id: string): Promise<ICar | null> {
    const findCar = await this._model.readOne(_id);
    if (!findCar) throw new Error(ErrorType.EntityNotFound);
    return findCar;
  }

  // async delete(_id: string): Promise<ICar | null> {
      
  // }
}