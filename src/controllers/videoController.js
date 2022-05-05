export const trending = (req, res) => res.render('home', { pageTitle: 'Home' }); //(name, var);
export const see = (req, res) => res.render('watch'); //console.log(req.params);
export const edit = (req, res) => res.render('edit');
export const search = (req, res) => res.send('Search');
export const upload = (req, res) => res.send('Upload');
export const deleteVideo = (req, res) => res.send('Delete Video');
