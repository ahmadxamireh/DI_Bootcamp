/*
Daily Challenge: Words in the Stars

1. Prompt the user for several words (separated by commas).
2. Put the words into an array.
3. Console.log the words one per line, in a rectangular frame as seen below.
 */

function frameWords(...args) {
    if (args.length === 0 || args.every(w => w.trim() === "")) return "No words to frame.";

    // console.log(args); // [ 'Hello', 'World', 'in', 'a', 'frame' ]
    const longestWord = args.reduce((a, b) => {
        if (a.length > b.length) return a;
        return b;
    }, "")

    const desiredWidth = longestWord.length + 4;

    const topBottomEdges = "*".repeat(desiredWidth) + "\n"
    let output = topBottomEdges;

    for (let word of args) {
        output += `* ${word}${" ".repeat(desiredWidth - (word.length + 3))}*\n`;
        // +3 to compensate for the "* " before the word and "*" after it, so that adds 3 to the length
    }

    output += topBottomEdges;

    return output;
}

console.log(frameWords("Hello", "World", "in", "a", "frame"))