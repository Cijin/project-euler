export function getAllPrimesUnder(num: number): { [key: string]: boolean } {
  // intialize object keys from 2 - num as true
  const allPrimesUnderNum: { [key: string]: boolean } = {}
  for (let i = 2; i <= num; i++) {
    allPrimesUnderNum[`${i}`] = true
  }

  // make every number that is not prime false
  for (let i = 2; i < num; i++) {
    if (allPrimesUnderNum[`${i}`]) {
      let temp = i + i
      while (temp < num) {
        delete allPrimesUnderNum[`${temp}`]
        temp += i
      }
    }
  }

  return allPrimesUnderNum
}
