export const basicHeatmapData = [
  { name: 0, day: 0, sales: 10 },
  { name: 0, day: 1, sales: 19 },
  { name: 0, day: 2, sales: 8 },
  { name: 0, day: 3, sales: 24 },
  { name: 0, day: 4, sales: 67 },
  { name: 1, day: 0, sales: 92 },
  { name: 1, day: 1, sales: 58 },
  { name: 1, day: 2, sales: 78 },
  { name: 1, day: 3, sales: 117 },
  { name: 1, day: 4, sales: 48 },
  { name: 2, day: 0, sales: 35 },
  { name: 2, day: 1, sales: 15 },
  { name: 2, day: 2, sales: 123 },
  { name: 2, day: 3, sales: 64 },
  { name: 2, day: 4, sales: 52 },
  { name: 3, day: 0, sales: 72 },
  { name: 3, day: 1, sales: 132 },
  { name: 3, day: 2, sales: 114 },
  { name: 3, day: 3, sales: 19 },
  { name: 3, day: 4, sales: 16 },
  { name: 4, day: 0, sales: 38 },
  { name: 4, day: 1, sales: 5 },
  { name: 4, day: 2, sales: 8 },
  { name: 4, day: 3, sales: 117 },
  { name: 4, day: 4, sales: 115 },
  { name: 5, day: 0, sales: 88 },
  { name: 5, day: 1, sales: 32 },
  { name: 5, day: 2, sales: 12 },
  { name: 5, day: 3, sales: 6 },
  { name: 5, day: 4, sales: 120 },
  { name: 6, day: 0, sales: 13 },
  { name: 6, day: 1, sales: 44 },
  { name: 6, day: 2, sales: 88 },
  { name: 6, day: 3, sales: 98 },
  { name: 6, day: 4, sales: 96 },
  { name: 7, day: 0, sales: 31 },
  { name: 7, day: 1, sales: 1 },
  { name: 7, day: 2, sales: 82 },
  { name: 7, day: 3, sales: 32 },
  { name: 7, day: 4, sales: 30 },
  { name: 8, day: 0, sales: 85 },
  { name: 8, day: 1, sales: 97 },
  { name: 8, day: 2, sales: 123 },
  { name: 8, day: 3, sales: 64 },
  { name: 8, day: 4, sales: 84 },
  { name: 9, day: 0, sales: 47 },
  { name: 9, day: 1, sales: 114 },
  { name: 9, day: 2, sales: 31 },
  { name: 9, day: 3, sales: 48 },
  { name: 9, day: 4, sales: 91 },
];

const NAMES = ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura'];
const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const semanticBasicHeatmapData = basicHeatmapData.map((row) => {
  return {
    name: NAMES[row.name],
    day: DAYS[row.day],
    sales: row.sales,
  };
});
