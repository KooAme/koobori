import express from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import videoRouter from './routers/videoRouter';
import userRouter from './routers/userRouter';

const app = express();
const logger = morgan('dev'); //have the other options

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views'); //view engine set
app.use(logger);
app.use(express.urlencoded({ extended: true })); //form 의 value들을 이해할 수 있도록 하고 자스형태로 바꿔줌
app.use('/', globalRouter);
app.use('/videos', videoRouter);
app.use('/users', userRouter);

export default app;
