import './db'; //file자체를 연결
import express from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import videoRouter from './routers/videoRouter';
import userRouter from './routers/userRouter';

const PORT = 5000;
const app = express();
const logger = morgan('dev'); //have the other options

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views'); //view engine set
app.use(logger);
app.use(express.urlencoded({ extended: true })); //form 의 value들을 이해할 수 있도록 하고 자스형태로 바꿔줌
app.use('/', globalRouter);
app.use('/videos', videoRouter);
app.use('/users', userRouter);

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}⭐️`);
};

app.listen(PORT, handleListening);
