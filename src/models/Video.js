import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, minLength: 80 },
  description: { type: String, required: true, trim: true, maxLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now }, //바로 실행시키지 않으려고 now()를 안함
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  }, //schema power
});

const Video = mongoose.model('Video', videoSchema);
export default Video;
