// 🌟 Exercise 1: Timer
// Instructions

// Part I
// 1. In your JavaScript file, using setTimeout, call a function after 2 seconds.
// 2. The function will alert “Hello World”.

function sayHi() {
    alert('Hello World')
}

setTimeout(sayHi, 2000)

// Part II
// 1. In your JavaScript file, using setTimeout, call a function after 2 seconds.
// 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

const div = document.getElementById('container');

function addParagraph() {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Hello World';
    div.appendChild(paragraph);
}

setTimeout(addParagraph, 2000)

// Part III
// 1. In your JavaScript file, using setInterval, call a function every 2 seconds.
// 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
function addParagraphEvery2sec() {
    addParagraph()

    // 4. Instead of clicking on the button, the interval will be cleared (i.e., clearInterval) as soon as there are 5
    // paragraphs inside the <div id="container">.
    if (div.childElementCount === 5) {
        clearInterval(timer)
    }
}

const timer = setInterval(addParagraphEvery2sec, 2000)

// 3. The interval will be cleared (i.e., clearInterval) when the user clicks on the button.
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
    clearInterval(timer)
})