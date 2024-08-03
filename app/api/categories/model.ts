import mongoose, { Model, Schema } from 'mongoose';
import ICategory from './interface';

const CategorySchema: Schema<ICategory> = new Schema({
  name: { type: String, required: true },
});

const Category: Model<ICategory> = mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);

export default Category;
