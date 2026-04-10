"use strict";

const BALLS_COUNT = 12;
const WALL_THICKNESS = 0.01;
const STEP = WALL_THICKNESS * 2;

let currentInnerDiameter = 0.48;
let totalVolume = 0;

const spheresReport = [];

for (let i = 1; i <= BALLS_COUNT; i++) {
  const currentVolume = (Math.PI / 6) * currentInnerDiameter ** 3;

  totalVolume += currentVolume;

  spheresReport.push({
    "Номер кулі": i,
    "Внутр. діаметр (м)": currentInnerDiameter.toFixed(2),
    "Об'єм кулі (м³)": currentVolume.toFixed(2),
  });

  currentInnerDiameter += STEP;
}

console.table(spheresReport);
console.log(
  "Сумарний внутрішній об'єм 12 куль: " + totalVolume.toFixed(2) + " м³",
);
