import { z } from 'zod';

export const AccountSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty('올바른 이름으로 입력해주세요')
    .min(2, '이름은 2자 이상이어야 합니다.')
    .max(20, '이름은 20자 이하이어야 합니다.'),
  phoneNumber: z
    .string()
    .trim()
    .nonempty('올바른 전화번호 양식(-제외)으로 입력해주세요')
    .regex(/^\d{11}$/, '올바른 전화번호 양식(-제외)으로 입력해주세요'),
});