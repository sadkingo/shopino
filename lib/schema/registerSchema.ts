import { z } from 'zod';
import hashPassword from "@/lib/util/hashPassword";

const registerSchema = z
  .object({
    name: z.string().min(1, {message: 'Name is required'}),
    email: z.string().email({message: 'Invalid email address'}),
    password: z
      .string()
      .min(8, {message: 'Password must be at least 8 characters long'})
      .regex(/[A-Z]/, {message: 'Password must contain at least one uppercase letter'})
      .regex(/[0-9]/, {message: 'Password must contain at least one number'})
      .regex(/[^A-Za-z0-9]/, {message: 'Password must contain at least one symbol (e.g., !@#$%^&*)'}),
    password_confirmation: z.string().min(1, {message: 'Password confirmation is required'}),
    phone: z.string().min(10).max(15).optional(),
    address: z.string().min(5).max(50).optional(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Passwords do not match',
    path: ['password_confirmation'],
  })
  .transform(async (data) => {
    const hashedPassword = hashPassword(data.password);
    return {
      ...data,
      password: hashedPassword,
      password_confirmation: undefined,
    };
  });

export default registerSchema;