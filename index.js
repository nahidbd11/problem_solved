/***********
 * TODO:find anagrma
 * ?what is anagram??=> if two word contain same letter then they are anagram for each other
 * *the anagram function will take two parameter anagram('anagram word',[aray of list to check anagram word])
 * !output will be an array of anagram word list
 *
 */

function anagram(word, words) {
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
console.log(anagram("khalidd", ["nahid", "khalid", "jahid", "liddkha"]));
