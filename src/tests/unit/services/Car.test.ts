// template para criação dos testes de cobertura da camada de service
import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car.model';
import {
  createdCar,
  createdCarWithId,
  readCars,
  readOneCar,
  updateCar,
  updatedCar
} from '../../mocks/mockCar'
import CarService from '../../../services/Car.service';
const { expect } = chai;

describe('Testa camada service de Car', () => {
  describe('Rota POST /cars', () => {
    const carModel = new CarModel();
    const carService = new CarService(carModel);

    before(async () => {
      sinon.stub(carModel, 'create').resolves(createdCarWithId);
    });

    after(()=>{
      sinon.restore();
    });

    describe('Em caso de sucesso', () => {
      it('Deve retornar um objeto', async () => {
        const newCar = await carService.create(createdCar);
        expect(newCar).to.eql(createdCarWithId);
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
          expect(error.status).to.be.equal(400);
        }

      });
    });
  });

  describe('Rota GET /cars', () => {
    const carModel = new CarModel();
    const carService = new CarService(carModel);

    before(async () => {
      sinon.stub(carModel, 'read').resolves(readCars);
    });

    after(()=>{
      sinon.restore();
    });

    describe('Em caso de sucesso', () => {
      it('Deve retornar um array', async () => {
        const cars = await carService.read();
        expect(cars).to.eql(readCars);
      });
    });
  });

  describe('Rota GET /cars/:id', () => {
    const carModel = new CarModel();
    const carService = new CarService(carModel);

    before(async () => {
      sinon.stub(carModel, 'readOne').resolves(readOneCar);
    });

    after(()=>{
      sinon.restore();
    });

    describe('Em caso de sucesso', () => {
      it('Deve retornar um objeto', async () => {
        const car = await carService.readOne(readOneCar._id);
        expect(car).to.eql(readOneCar);
      });
    });
  });

  describe('Rota PUT /cars/:id', () => {
    const carModel = new CarModel();
    const carService = new CarService(carModel);

    before(async () => {
      sinon.stub(carModel, 'update').resolves(updatedCar);
    });

    after(()=>{
      sinon.restore();
    });

    describe('Em caso de sucesso', () => {
      it('Deve retornar um objeto', async () => {
        const car = await carService.update(updatedCar._id, updateCar);
        expect(car).to.eql(updatedCar);
      });
    });
  });
});