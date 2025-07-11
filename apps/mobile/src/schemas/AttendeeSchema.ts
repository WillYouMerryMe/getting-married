import { z } from 'zod';

export const AttendeeSchema = z.object({
  name: z.string().trim().nonempty('').min(2).max(20),
  phoneNumber: z
    .string()
    .trim()
    .nonempty('')
    .regex(/^\d{11}$/),
});
