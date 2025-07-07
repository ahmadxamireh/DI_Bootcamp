// Create an array of emoji objects, each containing the emoji character and its corresponding name.
const emojis = [
    {emoji: "😀", name: "grinning"},
    {emoji: "😂", name: "lol"},
    {emoji: "❤️", name: "heart"},
    {emoji: "👍", name: "thumbs"},
    {emoji: "🎉", name: "celebration"},
    {emoji: "😎", name: "cool"},
    {emoji: "🥺", name: "pleading"},
    {emoji: "🔥", name: "fire"},
    {emoji: "🙌", name: "hands"},
    {emoji: "🚀", name: "rocket"},
    {emoji: '🌮', name: 'Taco'},
    {emoji: '🐶', name: 'Dog'}
];

/**
 * Generates a random emoji question with multiple choice answers.
 *
 * @param {number} count - Number of multiple choice options to include (including the correct one).
 * @returns {Object} An object containing:
 *   - emoji: the emoji character to guess,
 *   - options: an array of emoji name strings (multiple choice),
 *   - answer: the correct name string.
 */
export function getRandomEmojiAndOptions(count = 4) {
    // Validate the input to ensure it's within range
    if (count < 1 || count > emojis.length) throw new Error('invalid number');

    const indexes = new Set(); // Set to store unique random indexes

    // Keep adding random unique indexes until we reach the desired count
    while (indexes.size < count) {
        const rand = Math.floor(Math.random() * emojis.length); // Get a random index
        indexes.add(rand); // Add to the set (duplicates automatically ignored)
    }

    // Use the indexes to select emoji objects from the main array
    const options = Array.from(indexes).map(index => emojis[index]);

    // Randomly choose one of the options to be the correct answer
    const answer = options[Math.floor(Math.random() * options.length)];

    // Return the emoji to guess, the list of name options, and the correct name
    return {
        emoji: answer.emoji,                      // The emoji character (e.g. "🔥")
        options: options.map(opt => opt.name),    // Just the name strings for buttons (e.g. ["fire", "heart", "cool", "lol"])
        answer: answer.name                       // The correct answer name string (e.g. "fire")
    };
}