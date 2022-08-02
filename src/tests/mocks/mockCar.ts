import { ICar } from '../../interfaces/ICar';

export const createdCar: ICar = {
  "doorsQty": 4,
  "seatsQty": 5,
  "model": "Marea",
  "year": 2003,
  "color": "Prata",
  "buyValue": 30,
}

export const createdCarWithId: ICar & { _id: string } = {
  "doorsQty": 4,
  "seatsQty": 5,
  "model": "Marea",
  "year": 2003,
  "color": "Prata",
  "buyValue": 30,
  "_id": "62e5657e8051d02a82a20880",
}

export const readCars: (ICar & { _id: string })[] = [{
  "doorsQty": 4,
	"seatsQty": 5,
	"model": "Marea",
	"year": 2003,
	"color": "Prata",
	"buyValue": 30,
	"_id": "62e5657e8051d02a82a20880",
}]

export const readOneCar: ICar & { _id: string } = {
  "doorsQty": 4,
	"seatsQty": 5,
	"model": "Marea",
	"year": 2003,
	"color": "Prata",
	"buyValue": 30,
	"_id": "62e5657e8051d02a82a20880",
}

export const updatedCar: ICar & { _id: string } = {
  "doorsQty": 4,
	"seatsQty": 5,
	"model": "Marea",
	"year": 2003,
	"color": "Prata",
	"buyValue": 50,
	"_id": "62e5657e8051d02a82a20880",
}

export const updateCar: ICar = {
  "doorsQty": 4,
	"seatsQty": 5,
	"model": "Marea",
	"year": 2003,
	"color": "Prata",
	"buyValue": 50,
}

export const deleteCar: ICar & { _id: string } = {
  "doorsQty": 4,
	"seatsQty": 5,
	"model": "Marea",
	"year": 2003,
	"color": "Prata",
	"buyValue": 50,
	"_id": "62e5657e8051d02a82a20880",
}