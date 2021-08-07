import path from 'path'
import fs from 'fs'
/*
 * Solution for names, project euler question 22.
 *
 * Question:
 *  get scores of names in file names.txt. Scores are given based on position of name in a
 *  sorted oder * nameScore. nameScore is the sum of the postions of the alphabets in the name.
 *
 * Approach:
 *  1: Generate an object of scores from hex values of letters from a - z, and then use this object to
 *     calculate name scores.
 *
 *  Psuedo-code:
 *
 *      create constatnt string of alphabets
 *
 *     // generate object of alphabet values
 *     for(alphabet in alphabets) {
 *      ALPHABETS[alphabet] = value
 *     }
 *
 *     get names from files
 *     sort names from files
 *
 *     create generate name score function
 *
 *     get names from file as array ??
 *
 *     traverse through names to get total name scores in the file
 *
 *
 */
const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz'

/*
 * object to store alphabet values
 */
interface IAlphabetNumValues {
  [key: string]: string
}

const ALPHABET_VALUES: IAlphabetNumValues = {}

/*
 * get value of each alphabet, loop through alphabet string and update
 * the ALPHABET_VALUES object
 */
for (let i = 0; i < ALPHABETS.length; i++) {
  const currentAlphabet = ALPHABETS[i]
}

fs.readFile(path.resolve(__dirname, 'name.txt'))
