let currentAnswer = '';
let score = 0;

// load a new emoji and options from the server
function loadGame() {
    fetch('/game')
        .then(res => res.json())
        .then(data => {
            // get the generated random answer
            currentAnswer = data.answer;

            const gameDiv = document.getElementById('game');
            gameDiv.innerHTML = ''; // Clear old content

            // Show the emoji
            const emojiEl = document.createElement('h2');
            emojiEl.style.fontSize = '3rem';
            emojiEl.textContent = data.emoji;
            gameDiv.appendChild(emojiEl);

            // Create buttons for each option
            data.options.forEach(option => {
                const btn = document.createElement('button');
                btn.textContent = option;
                btn.addEventListener('click', () => submitGuess(option));
                gameDiv.appendChild(btn);
            });
        });
}

// submit the guess to the server and handle response
function submitGuess(guess) {
    fetch('/guess', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({guess, correctAnswer: currentAnswer})
    })
        .then(res => res.json())
        .then(data => {
            // show feedback
            document.getElementById('feedback').textContent =
                data.correct ? 'You guessed correctly! 🎉' : 'Wrong guess! 😢';

            // update score if correct
            if (data.correct) {
                score++;
                document.getElementById('score').textContent = score;
            }

            // load next question
            loadGame();
        });
}

// start the game on page load
loadGame();
