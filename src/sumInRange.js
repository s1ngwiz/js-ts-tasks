/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  start = Number(start);
  end = Number(end);
  let min = Math.min(start, end)
  let max = Math.max(start, end)
  const n = max - min + 1;
  return ((min + max) * n) / 2;
  throw new Error('Not implemented');
};
