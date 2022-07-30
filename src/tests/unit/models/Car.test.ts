// template para criação dos testes de cobertura da camada de model
import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import { createdCar, createdCarWithId } from '../../mocks/mockCar'
import CarModel from '../../../models/Car.model';
const { expect } = chai;

describe('Testa camada model de Car', () => {

  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(createdCarWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Em caso de sucesso', () => {
    it('Deve criar e retornar um objeto', async () => {
      const newCar = await carModel.create(createdCar)
      expect(newCar).to.be.eql(createdCarWithId);
    });
  });
});