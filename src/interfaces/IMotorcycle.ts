import { z } from 'zod';
import VehicleZodSchema from './IVehicle';

const categoryType = ['Street', 'Custom', 'Trail'] as const;

const MotorcycleZodSchema = z.object({
  category: z.enum(categoryType),
  engineCapacity: z.number().min(1).max(2500),
});

const MotorcycleZodSchemaMerge = MotorcycleZodSchema.merge(VehicleZodSchema);

export type IMotorcycle = z.infer<typeof MotorcycleZodSchemaMerge>;
export default MotorcycleZodSchemaMerge;