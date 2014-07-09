
//This takes a and takes the final letter and prints them backwards until it hits 0.
var inputWord = "somthing";
var outputWord = "";
for(var index = inputWord.length - 1; index >= 0 ; index--) {
   outputWord = outputWord + inputWord[index];
 }

console.log(outputWord)
//console.log(index, inputWord[index]);