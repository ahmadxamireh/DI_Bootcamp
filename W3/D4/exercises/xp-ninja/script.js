/*
Exercise: Merge Words

1. Create a function such as mergeWords('Hello')() that returns the following string: 'Hello'
2. When the function is called without any arguments, return a string where all words have been merged into a sentence.

For example
mergeWords('There')('is')('no')('spoon.')();
should return 'There is no spoon.'

3. Below is a verbose JavaScript solution, turn this into a currying function.
 */

function mergeWords(string) {
    return function (nextString) {
        if (nextString === undefined) {
            return string;
        } else {
            return mergeWords(string + ' ' + nextString);
        }
    }
}

// solution:

const mergeWords2 = string => nextString => nextString ? mergeWords2(string + ' ' + nextString) : string;

// when the function is called with arguments, it works in a recursive way.
// when the function is called without any arguments, return a string where all words have been merged into a sentence.

console.log(mergeWords2('There')('is')('no')('spoon.')());