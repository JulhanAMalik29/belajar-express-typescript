import express, { type Application } from 'express';
import 'dotenv/config';
import appMiddleware from './middleware';

const app: Application = express();
const PORT: number = process.env.PORT != null ? Number(process.env.PORT) : 3000;

app.use(appMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
