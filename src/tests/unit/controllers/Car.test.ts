// template para criação dos testes de cobertura da camada de controller
import Sinon, * as sinon from 'sinon';
import chai from 'chai';
import { NextFunction, Request, Response } from 'express';
import {  createdCarWithId, createdCar, readCars, readOneCar } from '../../mocks/mockCar';
import CarModel from '../../../models/Car.model';
import CarService from '../../../services/Car.service';
import CarController from '../../../controllers/Car.controller';
const { expect } = chai;

describe('Testa camada controller de Car', () => {
  describe('Rota POST /cars', () => {
    const carModel = new CarModel();
    const carService = new CarService(carModel);
    const carController = new CarController(carService);

    const res = {} as Response;
    const req = { body: createdCar } as Request;
    const next = (() => {}) as NextFunction;

    before(async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(createdCarWithId);
      sinon.stub(carService, 'create').resolves(createdCarWithId);
    });

    after(()=>{
      sinon.restore();
    })

    describe('Em caso de sucesso', () => {
      it('Deve retornar uma resposta com status 201', async () => {
        await carController.create(req, res, next);
        expect((res.status as Sinon.SinonStub).calledWith(201)).to.be.true;
      });
    });

    describe('Em caso de falha', () => {
      it('A função next deve ser chamada com um objeto de error', async () => {

        try {
          await carController.create(req, res, next);
        } catch (error) {
          expect((next as Sinon.SinonStub).calledWith(error)).to.be.true;
        }

      });
    });
  });

  describe('Rota GET /cars', () => {
    const carModel = new CarModel();
    const carService = new CarService(carModel);
    const carController = new CarController(carService);

    const res = {} as Response;
    const req = {} as Request;
    const next = (() => {}) as NextFunction;

    before(async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(readCars);
      sinon.stub(carService, 'read').resolves(readCars);
    });

    after(()=>{
      sinon.restore();
    });

    describe('Em caso de sucesso', () => {
      it('Deve retornar uma resposta com status 200', async () => {
        await carController.read(req, res, next);
        expect((res.status as Sinon.SinonStub).calledWith(200)).to.be.true;
      });
    });
  });

  describe('Rota GET /cars/:id', () => {
    const carModel = new CarModel();
    const carService = new CarService(carModel);
    const carController = new CarController(carService);

    const res = {} as Response;
    const req = {} as Request;
    const next = (() => {}) as NextFunction;
    
    before(async () => {
      req.params = { id: readOneCar._id };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(readOneCar);
      sinon.stub(carService, 'readOne').resolves(readOneCar);
    });

    after(()=>{
      sinon.restore();
    });

    describe('Em caso de sucesso', () => {
      it('Deve retornar uma resposta com status 200', async () => {
        await carController.readOne(req, res, next);
        expect((res.status as Sinon.SinonStub).calledWith(200)).to.be.true;
      });
    });
  });
});