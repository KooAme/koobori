import express from 'express';
import morgan from 'morgan';

const PORT = 4000;

const app = express();
const logger = morgan('dev'); //have the other options
app.use(logger);

const globalRouter = express.Router();

const handleHome = (req, res) => res.send('Home');

const userRouter = express.Router();
const handleUser = (req, res) => res.send('users');

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send('Watch videos');

app.use('/videos', videoRouter);
app.use('/users', userRouter);
app.use('/', globalRouter);

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}⭐️`);
};

app.listen(PORT, handleListening);
