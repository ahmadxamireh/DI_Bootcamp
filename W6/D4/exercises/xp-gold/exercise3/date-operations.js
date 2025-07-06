// require the date-fns package and perform the following operations:

const {format, addDays} = require('date-fns');

function formattedDate() {
    // Get the current date and time.
    const currentDate = new Date();

    // Add 5 days to the current date.
    const futureDate = addDays(currentDate, 5);

    // Format the resulting date as a string.
    const formattedDate = format(futureDate, 'yyyy-MM-dd hh:mm:ss');

    // Display the formatted date in the terminal.
    console.log('Date after 5 days:', formattedDate);
}

module.exports = formattedDate;