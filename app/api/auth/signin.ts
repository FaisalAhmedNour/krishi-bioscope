// import type { NextApiRequest, NextApiResponse } from 'next';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import { z } from 'zod';

// const signInSchema = z.object({
//   username: z.string(),
//   password: z.string(),
// });

// const adminUser = {
//   username: 'admin',
//   password: bcrypt.hashSync('password', 10),
// };

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const validation = signInSchema.safeParse(req.body);

//   if (!validation.success) {
//     return res.status(400).json(validation.error);
//   }

//   const { username, password } = req.body;

//   if (username === adminUser.username && bcrypt.compareSync(password, adminUser.password)) {
//     const token = jwt.sign({ username: adminUser.username }, process.env.JWT_SECRET as string, {
//       expiresIn: '1h',
//     });
//     res.status(200).json({ token });
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// };
