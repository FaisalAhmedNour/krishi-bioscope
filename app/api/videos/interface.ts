import mongoose, { Document } from "mongoose";
import { z } from "zod";
import ICategory, { IRecivedCategory } from "../categories/interface";

export interface IVideo extends Document {
    title: string;
    link: string;
    categories: ICategory[];
    date: Date;
}

export const videoSchema = z.object({
    title: z.string(),
    link: z.string(),
    categories: z.string().array(),
    date: z.date(),
});

export interface IRecivedVideo {
    _id: string;
    title: string;
    link: string;
    categories: IRecivedCategory[];
    date: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface IRecivedVideos {
    videos: IRecivedVideo[];
}
