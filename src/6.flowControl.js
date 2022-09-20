/**
 * write a function that receives a number as its argument;
 *    if the number is divisible by 3, the function should return `fizz`;
 *    if the number is divisible by 5, the function should return `buzz`;
 *    if the number is divisible by 3 and 5, the function should return `fizzbuzz`;
 *    if the value was provided was a number but doesn't match any of those criteria, return the number as is.
 *    if no number was provided or if the value provided wasn't a number (hint: typeof), return false
 */
function fizzBuzz(num) {
  for (let i=1; i <= 20; i++)
  {
    if (i % 15 == 0)
      console.log(`fizzbuzz`);
    else if (i % 3 == 0)
      console.log(`fizz`);
    else if (i % 5 == 0)
      console.log(`buzz`);
    else
      console.log(i);
  }
}

module.exports = {
  fizzBuzz
};
