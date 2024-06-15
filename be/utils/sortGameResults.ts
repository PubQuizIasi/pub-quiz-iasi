import { GameResultType } from '../types/gameResults';

export const sortGameResults = (gameResult: GameResultType) => {
  gameResult.results.sort((a, b) => {
    const sumA = a.points.reduce((acc, curr) => acc + curr, 0);
    const sumB = b.points.reduce((acc, curr) => acc + curr, 0);
    if (sumA !== sumB) {
      return sumB - sumA;
    }
    let index = a.points.length;
    while (index !== 0) {
      const pointsA = a.joker === index ? a.points[index] / 2 : a.points[index];
      const pointsB = b.joker === index ? b.points[index] / 2 : b.points[index];
      if (pointsA !== pointsB) {
        return pointsB - pointsA;
      }
      index--;
    }
    return 0;
  });
  return gameResult;
};
