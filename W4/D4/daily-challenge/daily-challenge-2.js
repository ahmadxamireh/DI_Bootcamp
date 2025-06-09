const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

// 1. Create three functions. The two first functions should return a promise.

// 2. The first function is named toJs():
// - this function converts the morse JSON string provided above to a morse JavaScript object.
// - if the morse JavaScript object is empty, throw an error (use reject)
// - else return the morse JavaScript object (use resolve)

function toJS(str) {
    return new Promise((resolve, reject) => {
        try {
            const morseObj = JSON.parse(str);
            if (Object.keys(morseObj).length === 0) {
                return reject('Error: ')
            }
            resolve(morseObj);
        } catch (error) {
            reject('Error: not a valid JSON format.');
        }
    });
}

// 3. The second function, called toMorse(morseJS), takes one argument: the new morse JavaScript object.
// - This function asks the user for a word or a sentence.
// - if the user entered a character that doesn’t exist in the new morse JavaScript object, throw an error. (use reject)
// - else return an array with the morse translation of the user’s word.

function toMorse(morseJS, userInput) {
    const word = userInput.toLowerCase();

    return new Promise((resolve, reject) => {
        if (!word) {
            return reject('Error: no input provided.');
        }

        const charArr = word.split("");
        let morseArr = [];

        for (let char of charArr) {
            if (!morseJS[char]) {
                return reject(`Error: '${char}' is not a valid Morse character.`);
            }
            morseArr.push(morseJS[char]);
        }

        resolve(morseArr);
    });
}

// 4. The third function, called joinWords(morseTranslation), takes one argument: the morse translation array
// - this function joins the morse translation by using line break and displaying it on the page (i.e., On the DOM)

const joinWords = morseTranslation => Promise.resolve(morseTranslation.join('\n'));

// get input from user and update DOM accordingly
document.getElementById('translate-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;

    toJS(morse)
        .then(morseObj => toMorse(morseObj, userInput))
        .then(joinWords)
        .then(result => {
            console.log(result);
            document.getElementById('output').innerText = result;
        })
        .catch(error => {
            console.error(error);
            document.getElementById('output').innerText = error;
        });
});