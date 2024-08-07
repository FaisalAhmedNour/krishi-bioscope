import mongoose, { Model, Schema } from 'mongoose';
import { IVideo } from './interface';
import { IRecivedCategory } from '../categories/interface';

const CategorySchema: Schema<IRecivedCategory> = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  __v: { type: Number, required: false }
});

const VideoSchema: Schema<IVideo> = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  categories: [CategorySchema],
  date: { type: Date, required: true, default: Date.now }
}, { timestamps: true });

const Video: Model<IVideo> = mongoose.models.Video || mongoose.model<IVideo>('Video', VideoSchema);
export default Video;
