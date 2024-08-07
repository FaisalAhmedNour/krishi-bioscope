// import IVideo from '@/interfacees/Video';
// import Video from '@/models/Video';
// import dbConnect from '@/utils/dbConnect';
// import { jwtMiddleware } from '@/utils/jwtMiddleware';
// import { validate } from '@/utils/validate';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { z } from 'zod';

// const videoSchema = z.object({
//   title: z.string(),
//   link: z.string(),
//   category: z.string(),
// });

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   await dbConnect(); 
//   console.log(req)
//   switch (req.method) {
//     case 'GET':
//       try {
//         const videos: IVideo[] = await Video.find({}).populate('category');
//         res.status(200).json({ success: true, data: videos });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     case 'POST':
//       return jwtMiddleware(async (req: NextApiRequest, res: NextApiResponse) => {
//         const validation = validate(videoSchema, req.body);

//         if (!validation.success) {
//           return res.status(400).json(validation.errors);
//         }

//         try {
//           const video: IVideo = await Video.create(req.body);
//           res.status(201).json({ success: true, data: video });
//         } catch (error) {
//           res.status(400).json({ success: false });
//         }
//       })(req, res);
//     case 'PUT':
//       return jwtMiddleware(async (req: NextApiRequest, res: NextApiResponse) => {
//         const validation = validate(videoSchema, req.body);

//         if (!validation.success) {
//           return res.status(400).json(validation.errors);
//         }

//         try {
//           const video: IVideo | null = await Video.findByIdAndUpdate(req.body.id, req.body, { new: true });
//           res.status(200).json({ success: true, data: video });
//         } catch (error) {
//           res.status(400).json({ success: false });
//         }
//       })(req, res);
//     case 'DELETE':
//       return jwtMiddleware(async (req: NextApiRequest, res: NextApiResponse) => {
//         try {
//           await Video.findByIdAndDelete(req.body.id);
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
