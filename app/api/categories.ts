// // import ICategory from '@/interfacees/Category';
// // import Category from '@/models/Category';
// import dbConnect from '@/utils/dbConnect';
// import { jwtMiddleware } from '@/utils/jwtMiddleware';
// import { validate } from '@/utils/validate';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { z } from 'zod';
 
// const categorySchema = z.object({
//   name: z.string(),
// });

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   await dbConnect();

//   switch (req.method) {
//     case 'GET':
//       try {
//         const categories: ICategory[] = await Category.find({});
//         res.status(200).json({ success: true, data: categories });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     case 'POST':
//       return jwtMiddleware(async (req: NextApiRequest, res: NextApiResponse) => {
//         const validation = validate(categorySchema, req.body);

//         if (!validation.success) {
//           return res.status(400).json(validation.errors);
//         }

//         try {
//           const category: ICategory = await Category.create(req.body);
//           res.status(201).json({ success: true, data: category });
//         } catch (error) {
//           res.status(400).json({ success: false });
//         }
//       })(req, res);
//     case 'PUT':
//       return jwtMiddleware(async (req: NextApiRequest, res: NextApiResponse) => {
//         const validation = validate(categorySchema, req.body);

//         if (!validation.success) {
//           return res.status(400).json(validation.errors);
//         }

//         try {
//           const category: ICategory | null = await Category.findByIdAndUpdate(req.body.id, req.body, { new: true });
//           res.status(200).json({ success: true, data: category });
//         } catch (error) {
//           res.status(400).json({ success: false });
//         }
//       })(req, res);
//     case 'DELETE':
//       return jwtMiddleware(async (req: NextApiRequest, res: NextApiResponse) => {
//         try {
//           await Category.findByIdAndDelete(req.body.id);
//           res.status(200).json({ success: true });
//         } catch (error) {
//           res.status(400).json({ success: false });
//         }
//       })(req, res);
//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// };
