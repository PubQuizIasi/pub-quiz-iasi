import mongoose from 'mongoose';
import { handleSeasonLeaderboard } from '../controllers/seasonLeaderboardController';
import { GameResultType } from '../types/gameResults';

const Schema = mongoose.Schema;

const gameResultSchema = new Schema({
  season: {
    type: Number,
    required: true,
    min: 0,
  },
  game: {
    type: Number,
    required: true,
    min: 0,
  },
  numberOfTeams: {
    type: Number,
    required: true,
    min: 0,
  },
  results: [
    {
      teamName: {
        type: String,
        required: true,
      },
      joker: {
        type: Number,
        required: true,
      },
      points: [
        {
          type: Number,
          required: true,
          min: 0,
          max: 32,
        },
      ],
    },
  ],
  rounds: [
    {
      type: String,
      required: true,
    },
  ],
});

gameResultSchema.post<GameResultType>('save', async function (next) {
  handleSeasonLeaderboard(this);
});

export default mongoose.model('gameResult', gameResultSchema);
