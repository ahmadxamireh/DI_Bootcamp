// 🌟 Exercise 6: Fortune teller
// Instructions
// 1. Create a self-invoking function that takes 4 arguments: number of children, partner’s name, geographic location,
// job title.
// 2. The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and
// married to <partner's name> with <number of children> kids."

/**
 * Predicts a fictional fortune based on the provided details.
 *
 * @param {number} numOfKids - The number of children in the prediction.
 * @param {string} partnerName - The name of the partner in the prediction.
 * @param {string} geoLocation - The geographical location for the prediction.
 * @param {string} jobTitle - The job title in the prediction.
 */
(function fortuneTeller(numOfKids, partnerName, geoLocation, jobTitle) {
    const p = document.createElement('p')
    p.textContent = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numOfKids} kids.`
    document.body.appendChild(p)
})(2, 'Emma', 'London', 'Wizard')
