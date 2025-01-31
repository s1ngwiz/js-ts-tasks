/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  firstNumber = Number(firstNumber.toString().replace(/\s+/g, ""));
  secondNumber = Number(secondNumber.toString().replace(/\s+/g, ""));
  return firstNumber + secondNumber;
  throw new Error('Not implemented');
};
