import { Document } from "mongoose";

interface ICategory extends Document {
    name: string;
}

export interface IRecivedCategory {
    _id: string;
    name: string;
    __v: number;
}

export interface IRecivedCategories {
    categories: IRecivedCategory[];
}

export default ICategory;