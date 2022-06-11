import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, minLength: 10 },
  description: { type: String, required: true, trim: true, maxLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now }, //바로 실행시키지 않으려고 now()를 안함
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  }, //schema power
});

videoSchema.static('formatHashtags', function (hashtags) {
  return hashtags
    .split(',')
    .map((word) => (word.startsWith('#') ? word : `#${word}`));
});

// //mongoose 의 middleware는 모델이 생성되기 전에 만들어 줘야 함
// videoSchema.pre('save', async function () {
//   //middleware function에서는 this가 주어지는데
//   //이 this는 우리가 저장하고자 하는 문서를 가르킴
//   this.hashtags = this.hashtags[0]
//     .split(',')
//     .map((word) => (word.startsWith('#') ? word : `#${word}`));
// });

const Video = mongoose.model('Video', videoSchema);
export default Video;
