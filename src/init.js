import './db'; //file자체를 연결
import './models/Video';
import app from './server';

const PORT = 5005;

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}⭐️`);
};

app.listen(PORT, handleListening);
