/*
Daily Challenge: True or False
Create a function that returns true if all parameters are truthy, and false otherwise.
*/

// Works for any number of arguments due to the rest parameter (...params)
function allTruthy(...params) {
    return params.every(param => param);
    /*
    When param => param returns 5, .every() sees that as true (because 5 is truthy).
    The arrow function returns the actual value.
	But .every() internally coerces that value to true or false.
     */

}

console.log(allTruthy(true, true, true));
console.log(allTruthy(true, false, true));
console.log(allTruthy(5, 4, 3, 2, 1, 0));
console.log(allTruthy(5, 4, 3, 2, 1));