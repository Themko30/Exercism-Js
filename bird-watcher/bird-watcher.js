// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let partialCount = 0;
  for (var i = 0; i < birdsPerDay.length; i++) {
    partialCount += birdsPerDay[i];
  }
  return partialCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const weekStart = (week - 1) * 7;
  const weekEnd = weekStart + 7;
  let partialCount = 0;
  for (var i = weekStart; i < weekEnd; i++) {
    partialCount += birdsPerDay[i];
  }
  return partialCount;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (var i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] = birdsPerDay[i] + 1;
  }
  return birdsPerDay;
}
