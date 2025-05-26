/*
 Daily challenge: Not Bad

 What You will learn:
 Use JavaScript string and array methods
 Use conditional statements
 */

// Instructions
// 1. Create a variable called sentence. The value of the variable should be a string that contains the words “not”
// and “bad”
let sentence = "The movie is not that bad, I like it";

// 2. Create a variable called wordNot where its value is the first appearance (i.e., the position) of the substring
// “not” (from the sentence variable).
let wordNot = sentence.indexOf("not");

// 3. Create a variable called wordBad where its value is the first appearance (i.e., the position) of the substring
// “bad” (from the sentence variable).
let wordBad = sentence.indexOf("bad");

// 4. If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then
// console.log the result.
// For example, the result here should be: “The movie is good, I like it”
if (wordBad > wordNot) {
    let result = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3)
    console.log(result)
}
// 5. If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original
// sentence.
if (wordBad < wordNot || (wordBad === -1 && wordNot === -1)) {
    console.log(sentence)
}
