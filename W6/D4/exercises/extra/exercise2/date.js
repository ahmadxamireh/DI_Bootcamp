// Create a function that accepts a birthdate as an argument (in the format of your choice),
// and then return the number of minutes the user lived in his life. Export this function.
// Hint: Hardcode the value of the argument, don’t ask a user for it.

function getMinutesLivedSince(birthdate = '1997-05-24') {
    const now = new Date();
    const birthDate = new Date(birthdate);

    const ms = now - birthDate;
    return Math.floor((ms / (1000 * 60))); // minutes
}

module.exports = getMinutesLivedSince;