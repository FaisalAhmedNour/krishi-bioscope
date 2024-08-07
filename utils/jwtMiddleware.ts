// import { NextApiRequest, NextApiResponse } from 'next';
// import jwt from 'jsonwebtoken';

// export const jwtMiddleware = (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
//     req.user = decoded;
//     return handler(req, res);
//   } catch (error) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
// };
