let videos = [
  {
    title: 'first video',
    rating: 3,
    comments: 2,
    createAt: '2minutes ago',
    views: 53,
    id: 1,
  },
  {
    title: 'second video',
    rating: 5,
    comments: 2,
    createAt: '12minutes ago',
    views: 33,
    id: 2,
  },
  {
    title: 'third video',
    rating: 2,
    comments: 2,
    createAt: '4minutes ago',
    views: 13,
    id: 3,
  },
];
export const trending = (req, res) => {
  return res.render('home', { pageTitle: 'Home', videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render('watch', { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render('edit', { pageTitle: `Editing: ${video.title}`, video });
}; //form을 화면에 보여줌
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
}; //저장해 줌
