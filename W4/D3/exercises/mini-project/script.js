/*
Mini project - Random Quote Generator

Create a Random Quote Generator game in JavaScript.

Part 1: Quote Generator
1. Creates an HTML file that contains a section (for now the section is empty), and a button “Generate Quote”.

2. In the JavaScript file, create an array of objects. Each object has 3 keys : id, author and quote.
The id must start at 0 and is incremented for every new quote.
So the first quote will have the id 0, the second quote the id 1, the third quote the id 2 ect…

3. Populate the array with a few quotes that you like.

4. When the “Generate Quote” button is pressed, retrieve randomly a quote (i.e., an object) and display it in the DOM.
Important: When clicking on the button, make sure you don’t display the same quote twice in a row.
*/

let quotesArr = [
    {id: 0, author: "Leonardo da Vinci", quote: "Simplicity is the ultimate sophistication.", likes: 0},
    {id: 1, author: "Steve Jobs", quote: "Stay hungry, stay foolish.", likes: 0},
    {id: 2, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0},
]

let quoteID = 3;

let displayedQuotes = [];
let lastDisplayedQuote = ""; // to keep track of the last displayed quote to avoid showing it in a row

document.getElementById("generate-btn").addEventListener("click", () => {
    while (true) {
        if (displayedQuotes.length !== quotesArr.length) {
            // get a random quote
            const quote = quotesArr[Math.floor(Math.random() * quotesArr.length)];
            // if it was displayed, skip it and loop again
            if (displayedQuotes.some(q => q.id === quote.id)) {
                continue;
            }
            // if it is new, add it to the displayedQuotes array and to the DOM
            displayedQuotes.push(quote);
            lastDisplayedQuote = quote;
            document.getElementById("displayedQuote").innerHTML = `
            <div id="quote">${quote.quote}</div>
            <div id="author">${quote.author}</div>
            <div id="likes"># of likes: ${quote.likes}</div>
            `;
            break;
        } else {
            // If the user generated all the quotes, clear the array to start again.
            // Add the last displayed quote to skip it in the new loop.
            displayedQuotes = [lastDisplayedQuote];
        }
    }
})

/*
Part 2: Add buttons
In the HTML file, create a form with the inputs “Quote” and “Author” and a button.
So when you click on the button, you can add a new quote to the array of object.
Important: Don’t forget to set the id of the new quotes

In the HTML file, under the displayed quote, create a few more buttons:
A button that gives the number of character inside each quote (space included)
A button that gives the number of character inside each quote (space NOT included)
A button that gives the number of words in each quote
A button “Like” for the user to like a quote. Hint: add a new key to each object that will represent the number of “likes”.
 */

document.getElementById("add-quote-btn").addEventListener("click", () => {
    const newQuote = document.getElementById("new-quote");
    const newAuthor = document.getElementById("new-author");
    const newQuoteObj = {id: quoteID, author: newAuthor.value, quote: newQuote.value, likes: 0}

    const exists = quotesArr.some(q =>
        q.quote.trim().toLowerCase() === newQuote.value.trim().toLowerCase() &&
        q.author.trim().toLowerCase() === newAuthor.value.trim().toLowerCase()
    );
    if (exists) {
        alert("Quote already exists!");
        return;
    }

    if (newQuote.value !== "" && newAuthor.value !== "") {
        quotesArr.push(newQuoteObj);
        quoteID += 1;
        alert("Quote added successfully!");
        newQuote.value = "";
        newAuthor.value = "";
    } else {
        alert("Please enter a valid quote and author name!");
    }
})

const quoteInclusiveLengthBtn = document.getElementById("char-num-incl-space");
quoteInclusiveLengthBtn.addEventListener("click", () => {
    const quoteElement = document.getElementById("quote");
    if (!quoteElement) return alert("No quote to analyse yet!");
    const quote = document.getElementById("quote").textContent;
    alert(`# of Characters (with spaces): ${quote.length}`);
});

const quoteExclusiveLengthBtn = document.getElementById("char-num-excl-space");
quoteExclusiveLengthBtn.addEventListener("click", () => {
    const quoteElement = document.getElementById("quote");
    if (!quoteElement) return alert("No quote to analyse yet!");
    const quote = document.getElementById("quote").textContent;
    alert(`# of Characters (without spaces): ${quote.split('').filter(char => char !== ' ').length}`);
});

const numOfWordsBtn = document.getElementById("num-of-words");
numOfWordsBtn.addEventListener("click", () => {
    const quoteElement = document.getElementById("quote");
    if (!quoteElement) return alert("No quote to analyse yet!");
    const quote = document.getElementById("quote").textContent;
    alert(`Number of Words: ${quote.split(' ').length}`);
});

const likesBtn = document.getElementById("num-of-likes");
likesBtn.addEventListener("click", () => {
    const quoteElement = document.getElementById("quote");
    if (!quoteElement) return alert("No quote to analyse yet!");
    const quote = document.getElementById("quote").textContent;
    for (let q of quotesArr) {
        if (q.quote === quote) {
            q.likes += 1;
            document.getElementById("likes").textContent = `# of likes: ${q.likes}`;
            break
        }
    }
});