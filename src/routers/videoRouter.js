import express from 'express';

import {
  postEdit,
  watch,
  getEdit,
  getUpload,
  postUpload,
} from '../controllers/videoController';

const videoRouter = express.Router();

// videoRouter.get('/upload', upload); //제일위에 있는이유? :id밑에 있으면 upload가 id로 됨. :id에서 멈춤 request는 제일 위를 보기 때문, express가 id로 착각
//그래서 정규식 사용 ex: (koo\w+) koo로 시작하는 단어 모두 선택 > 이렇게 되면 upload가 밑에 있어도 상관없음
//(\d+) : 숫자만 선택  js는 \\두개
//id라는 이름은 필요없지만, controller에게 id는 매우 중요하기 때문에 만드는것이 좋음.
videoRouter.get('/:id([0-9a-f]{24})', watch); //:parameter 가 없으면 모든 영상마다 router을 만들어야 함. ':' url안에 변수를 만들 수 있음, ID number
videoRouter.route('/:id([0-9a-f]{24})/edit').get(getEdit).post(postEdit);
videoRouter.route('/upload').get(getUpload).post(postUpload);
//url 이 같은 경우 route로 한번에 할 수 있음. 코드도 줄고 실수도 줄어듦
//regular expression 은 공부를 더 할것 ! 유용함
export default videoRouter;
