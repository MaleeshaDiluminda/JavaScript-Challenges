// Return the longest word in a string
// First were gonna create a function for that we need function keyword
// Function name will gonna be longestWord, parameter will gonna be passing in the string
function longestWord(str) {
  let words = str.split(" "); // This is split method, I have used this method to split spaces, to find words
  // console.log(words); // Output ->  ['I', 'woke', 'up', 'early', 'Today'] ['I', 'went', 'to', 'the', 'University']
  let longestWord = '';

  for(let word of words){ // to get splitted words 
//  console.log(word); // Output -> I 
                                 // woke
                                 // up ...... etc
    if(word.length > longestWord.length){
        longestWord = word;
    }                             
  }

  return longestWord;
}

// Next we have split up the strings cause there is no way to check the actual string

console.log(longestWord("I woke up early Today"));
console.log(longestWord("I went to the University"));

