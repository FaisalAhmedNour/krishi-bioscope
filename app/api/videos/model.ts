import mongoose, { Model, Schema } from 'mongoose';
import { IVideo } from './interface';

const VideoSchema: Schema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }],
  date: { type: Date, required: true, default: Date.now }
},{timestamps: true});

const Video: Model<IVideo> = mongoose.models.Video || mongoose.model<IVideo>('Video', VideoSchema);
export default Video;
