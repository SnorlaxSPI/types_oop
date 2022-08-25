import express from 'express';
import { createCourse } from './routes/routes';

const app = express();

app.use(express.json());

app.get('/', createCourse);

app.listen(3000, () => {
  console.log("🚀🚀 Server Started!!");
});

