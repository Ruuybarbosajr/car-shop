import { ICar } from '../../interfaces/ICar';

export const createdCar: ICar = {
  "doorsQty": 4,
  "seatsQty": 5,
  "model": "Marea",
  "year": 2003,
  "color": "Prata",
  "buyValue": 30,
}

export const createdCarWithId: ICar & { _id: string, __v: number } = {
  "doorsQty": 4,
  "seatsQty": 5,
  "model": "Marea",
  "year": 2003,
  "color": "Prata",
  "buyValue": 30,
  "_id": "62e5657e8051d02a82a20880",
  "__v": 0
}

export const readCars: (ICar & { _id: string, __v: number })[] = [{
  "doorsQty": 4,
	"seatsQty": 5,
	"model": "Marea",
	"year": 2003,
	"color": "Prata",
	"buyValue": 30,
	"_id": "62e5657e8051d02a82a20880",
	"__v": 0
}]

export const readOneCar: ICar & { _id: string, __v: number } = {
  "doorsQty": 4,
	"seatsQty": 5,
	"model": "Marea",
	"year": 2003,
	"color": "Prata",
	"buyValue": 30,
	"_id": "62e5657e8051d02a82a20880",
	"__v": 0
}