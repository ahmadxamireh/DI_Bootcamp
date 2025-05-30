// 🌟 Exercise 1: Change the article
// Instructions
// Copy the code below into a structured HTML file:
//
//     <article>
//         <h1> Some Facts </h1>
//         <h2> The Chocolate </h2>
//         <h3> History of the chocolate </h3>
//         <p> Chocolate is made from tropical Theobroma cacao tree seeds.
//             Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//         <p> After the European discovery of the Americas, chocolate became
//             very popular in the wider world, and its demand exploded. </p>
//         <p> Chocolate has since become a popular food product that millions enjoy every day,
//             thanks to its unique, rich, and sweet taste.</p>
//         <p> But what effect does eating chocolate have on our health?</p>
//     </article>
//
//
// 1. Using a DOM property, retrieve the h1 and console.log it.

const h1 = document.querySelector('h1');
console.log(h1)

// 2. Using DOM methods, remove the last paragraph in the <article> tag.

const article = document.querySelector('article');
article.lastElementChild.remove();

// 3. Add an event listener which will change the background color of the h2 to red when it’s clicked on.

const h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
    h2.style.backgroundColor = 'red';
})

// 4. Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
    h3.style.display = 'none';
})

// 5. Add a <button> to the HTML file that when clicked on should make the text of all the paragraphs bold.

const paragraphs = document.querySelectorAll('p');
const btn = document.createElement('button');
btn.className = 'btn';
btn.innerText = 'Make Text Bold';
btn.addEventListener('click', () => {
    paragraphs.forEach(paragraph => {
        paragraph.style.fontWeight = 'bold';
    })
})
document.body.appendChild(btn);

// 6. BONUS: When you hover on the h1, set the font size to a random pixel size between 0 and 100.

h1.addEventListener('mouseover', () => {
    const randInt = Math.floor(Math.random() * 101)
    h1.style.fontSize = randInt + 'px'
})

// 7. BONUS: When you hover on the 2nd paragraph, it should fade out.

const p2 = paragraphs[1]
p2.addEventListener('mouseover', () => {
    p2.classList.add('fade-out');
})