/*
 *
 *  d(n) => proper divisors of n (numbers less than n which divide
 *  evenly into n)
 *
 *  if d(a) = b and d(b) = a, where a != b, then a & b are an amicable pair and a & b are amicable
 *  numbers
 *
 *  ex: d(220) => 1,2,4,5,10,11,20,22,44,55,110 = 284
 *      d(284) => 1,2,3,71,142 = 220
 *
 *  Evaluate the sum of all under 10,000
 *
 *
 *  Psuedocode:
 *
 *    start from 220
 *    increment 1
 *    stop and 10000
 *
 *    220 -> find all factors of 220
 *    function: sumOfProperDivisors
 *    input number -> output sum of divisors
 *
 *    sumOfProperDivisors(220):
 *      from 2 -> sqrt(220), find numbers that divide 220, if the number and the divisor are the same
 *      add them only once
 *      if they are different add them both
 *    returns 284
 *
 *    now check if sumOfProperDivisors(284) === 220
 *
 *    if yes add them both to the final output. Add them both to the checked array so as to not
 *    repeat the process
 *
 *    try only even nubmers first
 *
 */

function sumOfProperDivisors(num: number): number {
  let result = 1
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (i === num % i) {
        result += i
      } else {
        result += i + num / i
      }
    }
  }
  return result
}

function findAmicableSum(): number {
  let finalResult = 0
  for (let i = 220; i <= 10000; i++) {
    const sumOfDivisors = sumOfProperDivisors(i)
    // to avoid checking checking twice, check if the sum of the divisor
    // of i is greater than i
    if (sumOfDivisors > i) {
      const secondNum = sumOfProperDivisors(sumOfDivisors)
      if (secondNum === i) {
        finalResult += i + sumOfDivisors
      }
    }
  }
  return finalResult
}

console.log(findAmicableSum())
