import { z } from 'zod';

export const GuestBookSchema = z.object({
  name: z.string().trim().nonempty(''),
  content: z.string().trim().nonempty(''),
});
