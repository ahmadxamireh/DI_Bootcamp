// create a function that returns the amount of time left from now until January 1st. Export this function.

function timeUntilNewYear() {
    const now = new Date();
    const nextJan1 = new Date(now.getFullYear() + 1, 0, 1); // Jan 1st of next year

    const ms = nextJan1 - now; // difference in milliseconds

    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const seconds = Math.floor((ms / 1000) % 60);

    return `The 1st January is in ${days} days and ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} hours`;
}

module.exports = timeUntilNewYear;