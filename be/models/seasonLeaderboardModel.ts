import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const seasonLeaderboardSchema = new Schema({
  season: {
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
      gameResult: [
        {
          game: {
            type: Number,
            required: true,
            min: 0,
          },
          points: {
            type: Number,
            required: true,
            min: 0,
            max: 112,
          },
        },
      ],
      totalPoints: {
        type: Number,
        required: true,
        min: 0,
      },
    },
  ],
});

export default mongoose.model('seasonLeaderboard', seasonLeaderboardSchema);
