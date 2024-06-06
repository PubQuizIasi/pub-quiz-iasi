import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import userRouter from './routes/userRoutes';
import seasonsRouter from './routes/seasonsRoutes';
import contactRoutes from './routes/contactRoutes';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import auth from './middlewares/authMiddleware';
import {
  protectedGameResultsRouter,
  unprotectedGameResultsRouter,
} from './routes/gameResultsRoutes';
import { getCorsOrigin } from './utils/getCorsOrigin';

dotenv.config();

const corsOptions = {
  credentials: true,
  origin: getCorsOrigin(),
};

const app = express();
const port = process.env.PORT;
const dbUri = process.env.DB_URI as string;

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.use('/', userRouter);
app.use('/seasons', seasonsRouter);
app.use('/game-results', unprotectedGameResultsRouter);
app.use('/contact', contactRoutes);

app.use(auth);

app.use('/game-results', protectedGameResultsRouter);

mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  });

module.exports = app;
