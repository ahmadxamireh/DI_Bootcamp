// write a function that returns today’s date and the amount of time left from now until the next holiday.
// additionally display what holiday that is. Export this function.
// Hint: Start with hardcoding the datetime and name of the holiday.

function timeUntilNextHoliday(name = 'New Years Eve') {
    const now = new Date();
    const nextHoliday = new Date(now.getFullYear(), 11, 31); // 31/12 of this year

    const ms = nextHoliday - now; // difference in milliseconds

    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const seconds = Math.floor((ms / 1000) % 60);

    return `Today's date: ${now.toDateString()}, the ${name} is in ${days} days and ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} hours`;
}

module.exports = timeUntilNextHoliday;