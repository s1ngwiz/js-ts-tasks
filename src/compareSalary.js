/**
 * Compare three salaries and return the difference between the highest and lowest salary
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  let maxSalary = 0;
  let minSalary = 0;

  if (firstSalary > secondSalary && firstSalary > thirdSalary) {
    maxSalary = firstSalary;
  } else if (secondSalary > firstSalary && secondSalary > thirdSalary) {
    maxSalary = secondSalary;
  } else if (thirdSalary > firstSalary && thirdSalary > secondSalary) {
    maxSalary = thirdSalary;
  }

  if (firstSalary < secondSalary && firstSalary < thirdSalary) {
    minSalary = firstSalary;
  } else if (secondSalary < firstSalary && secondSalary < thirdSalary) {
    minSalary = secondSalary;
  } else if (thirdSalary < firstSalary && thirdSalary < secondSalary) {
    minSalary = thirdSalary;
  }

  return maxSalary - minSalary;
};
