let videos = [
  //mixin is smart partials
  {
    title: 'First Video',
    rating: 5,
    comments: 2,
    createdAt: '2 minutes ago',
    views: 1,
    id: 1,
  },
  {
    title: 'Second Video',
    rating: 3,
    comments: 6,
    createdAt: '2 minutes ago',
    views: 54,
    id: 2,
  },
  {
    title: 'Third Video',
    rating: 4,
    comments: 6,
    createdAt: '2 minutes ago',
    views: 54,
    id: 3,
  },
];
export const trending = (req, res) => {
  return res.render('home', { pageTitle: 'Home', videos });
}; //(name, var);
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render('watch', { pageTitle: `Watching ${video.title}`, video });
};
//console.log(req.params);
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render('edit', { pageTitle: `Editing ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`); //그저 이쪽으로 가게 해주는 역할
};

export const getUpload = (req, res) => {
  return res.render('upload', { pageTitle: 'Upload videos' });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    createdAt: 'just now',
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect('/');
};
