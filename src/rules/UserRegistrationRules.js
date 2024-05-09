import * as z from 'zod';

const userRegistrationRules = z.object({
    name: z.string().max(255),
    email: z.string().email({ message: 'Invalid email address' }).min(1, { message: 'Email is required' }),
    password: z.string().min(10, { message: 'Password must be at least 10 characters' }),
}).strict();

export default userRegistrationRules;