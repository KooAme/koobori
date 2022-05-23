let videos = [
  {
    title: 'First Video',
    rating: 5,
    comments: 2,
    createdAt: '2 minutes ago',
    views: 10,
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
export const see = (req, res) => res.render('watch'); //console.log(req.params);
export const edit = (req, res) => res.render('edit');
export const search = (req, res) => res.send('Search');
export const upload = (req, res) => res.send('Upload');
export const deleteVideo = (req, res) => res.send('Delete Video');
