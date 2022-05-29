import express from 'express';
import { join, login } from '../controllers/userController';
import { home, search } from '../controllers/videoController';

const globalRouter = express.Router();

globalRouter.get('/', home);
globalRouter.get('/join', join);
globalRouter.get('/login', login);

export default globalRouter; //default를 줬기 때문에 import이름이 달라도 상관없음, でも、一個しかできない。
