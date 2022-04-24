import express from 'express';
import { join, login } from '../controllers/userController';
import { trending, search } from '../controllers/videoController';

const globalRouter = express.Router();

globalRouter.get('/', trending);
globalRouter.get('/join', join);
globalRouter.get('/login', login);
globalRouter.get('/search', search);

export default globalRouter; //default를 줬기 때문에 import이름이 달라도 상관없음, でも、一個しかできない。
