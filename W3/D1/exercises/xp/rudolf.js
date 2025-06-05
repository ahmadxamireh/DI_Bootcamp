/*
 Exercise 6: Rudolf
 Instructions
 const details = {
 my: 'name',
 is: 'Rudolf',
 the: 'reindeer'
 }
 Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
 */

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
};

let output = "";
for (let key in details) {
    output += `${key} ${details[key]} `;
}
console.log(output.trim());