// template para criação dos testes de cobertura da camada de service
import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car.model';
import { createdCar, createdCarWithId } from '../../mocks/mockCar'
import CarService from '../../../services/Car.service';
const { expect } = chai;

describe('Testa camada service de Car', () => {

  const carModel = new CarModel()
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(createdCarWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Em caso de sucesso', () => {
    it('Deve retornar um objeto', async () => {
      const newCar = await carService.create(createdCar);
      expect(newCar).to.eql(createdCarWithId)
    });
  });

  describe('Em caso de falha', () => {
    it('Deve retornar um error com status 400', async () => {

      const objWithOutModel = {
        "doorsQty": 4,
        "seatsQty": 5,
        "model": "",
        "year": 2003,
        "color": "Prata",
        "buyValue": 30,
      }

      try {
        await carService.create(objWithOutModel);
      } catch (error: any) {
        expect(error.status).to.be.equal(400)
      }

    });
  });

});