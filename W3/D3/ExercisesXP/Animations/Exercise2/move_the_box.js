// 🌟 Exercise 2: Move the box
// Instructions

// 1. In your JavaScript file, use setInterval to move the <div id="animate"> to the right side of the
// <div id="container"> when the button is clicked on.
// 2. The <div id="animate"> should move 1 px to the right every millisecond,
// until it reaches the end of the<div id="container">.
// Hint: use clearInterval as soon as the box reaches the right end side of the container

const container = document.getElementById('container');
const box = document.getElementById('animate');
const btn = document.querySelector('button')

let interval;
btn.addEventListener('click', () => {
    // If interval already has a timer ID (meaning a previous setInterval is running), stop it before starting a new
    // one from the last position the stopped interval reached.
    // This helps stop stacked interval calls everytime the button is clicked.
    // Because if we do not reset the interval, the box will move faster.
    // If interval has a timer ID, it is a truthy value so if statement works.
    if (interval) clearInterval(interval);

    interval = setInterval(myMove, 1)
})

function myMove() {
    let leftOffset = parseInt(box.style.left) || 0; // ex: '50px' => 50 |OR| 0 if it is unset = ''

    // container.offsetWidth = 400
    // box.offsetWidth = 50
    // if we stop at (leftOffset < container.offsetWidth), the box will be at the outer edge because it will stop
    // moving at the 400th pixel, so to keep it inside the container, we deduct its width also, because moving
    // the position starts from the left edge of the box.
    // This ensures the box stops before overflowing the container.
    if (leftOffset < container.offsetWidth - box.offsetWidth) {
        leftOffset += 1;
        box.style.left = leftOffset + 'px';
    } else {
        clearInterval(interval)
    }
}