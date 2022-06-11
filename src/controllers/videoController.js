import Video from '../models/Video';
// Video.find({}, (error, videos) => {
// }); // db connect

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render('home', { pageTitle: 'Home', videos });
};
export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id); //검색이 끝나면 video가 불려짐
  if (!video) {
    return res.render('404', { pageTitle: 'Video Not found' });
  }
  return res.render('watch', { pageTitle: video.title, video });
};
//console.log(req.params);
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id); //edit템플릿에 video object를 보내야해서 exists가 필요없음
  if (!video) {
    return res.render('404', { pageTitle: 'Video Not found' });
  }
  return res.render('edit', { pageTitle: `Edit: ${video.title}`, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id }); //exists는 filter를 받음
  if (!video) {
    return res.render('404', { pageTitle: 'Video not found.' });
  }
  await Video.findByIdAndUpdate(id, {
    //mongoose function
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  return res.redirect(`/videos/${id}`); //그저 이쪽으로 가게 해주는 역할
};

export const getUpload = (req, res) => {
  return res.render('upload', { pageTitle: 'Upload Video' });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      //Video.save(); 도 가능함
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect('/');
  } catch (error) {
    return res.render('upload', {
      pageTitle: 'Upload Video',
      errorMessage: error._message,
    });
  }
};
