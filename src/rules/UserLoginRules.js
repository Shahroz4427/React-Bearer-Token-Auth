import * as z from 'zod';

const userLoginRules = z.object({
    email: z.string().email({ message: 'Invalid email address' }).min(1, { message: 'Email is required' }),
    password: z.string().min(10, { message: 'Password must be at least 10 characters' }),
}).strict();

export default userLoginRules;