import mongoose, { Document } from "mongoose";
import { z } from "zod";

export interface IVideo extends Document {
    title: string;
    link: string;
    categories: mongoose.Types.ObjectId[];
    date: Date;
}

export const videoSchema = z.object({
    title: z.string(),
    link: z.string(),
    categories: z.string().array(),
    date: z.date(),
  });