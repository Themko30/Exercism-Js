// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  var number1 = String(array1.join(""));
  var number2 = String(array2.join(""));
  var sum = Number(number1) + Number(number2);
  return sum;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  var pal1 = String(value);
  var pal1Array = pal1.split("");
  var reversedPal1Array = pal1Array.reverse();
  var reversedPal1 = reversedPal1Array.join("");
  return pal1 === reversedPal1;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  throw new Error("Implement the errorMessage function");
}
