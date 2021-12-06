/***********
 * TODO:find anagrma
 * ?what is anagram??=> if two word contain same letter then they are anagram for each other
 * *the anagram function will take two parameter anagram('anagram word',[aray of list to check anagram word])
 * !output will be an array of anagram word list
 *
 */

function anagrams(word, words) {
  let givenWord = sorted(word);
  let anaObj = {};
  words.forEach((word) => {
    anaObj[word] = sorted(word);
  });
  let output = [];
  for (const prop in anaObj) {
    if (anaObj[prop] === givenWord) {
      output.push(prop);
    }
  }
  return output;
}

function sorted(word) {
  return word.split("").sort().join("");
}
console.log(anagrams("khalidd", ["nahid", "khalid", "jahid", "liddkha"]));

// function sorted(word) {
//   return word.split("").sort().join("");
// }

/**HACK:easy solution
 * 
 */
function anagram(word, words) {
  let output = words.filter((x) => sorted(x) === sorted(word));
  return output;
}
console.log(anagram("nahid", ["idnah"]));
