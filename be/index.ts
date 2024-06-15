import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import auth from './middlewares/authMiddleware';
import contactRoutes from './routes/contactRoutes';
import {
  protectedGameResultsRouter,
  unprotectedGameResultsRouter,
} from './routes/gameResultsRoutes';
import seasonLeaderboardRoutes from './routes/seasonLeaderboardRoutes';
import seasonsRouter from './routes/seasonsRoutes';
import userRouter from './routes/userRoutes';
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

// unprotected endpoints
app.use('/', userRouter);
app.use('/seasons', seasonsRouter);
app.use('/game-results', unprotectedGameResultsRouter);
app.use('/contact', contactRoutes);
app.use('/season-leaderboard', seasonLeaderboardRoutes);

app.use(auth);

// protected endpoints
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
