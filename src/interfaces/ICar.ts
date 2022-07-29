import { z } from 'zod';
import VehicleZodSchema from './IVehicle';

const CarZodSchema = z.object({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
});

const CarZodSchemaMerge = VehicleZodSchema.merge(CarZodSchema);

export type ICar = z.infer<typeof CarZodSchemaMerge>;
export default CarZodSchemaMerge;