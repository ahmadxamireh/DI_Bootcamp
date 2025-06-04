// 🌟 Exercise 8: Juice Bar
// Instructions
// You will use nested functions to open a new juice bar.
//
// Part I:
// 1. The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small,
// medium or large.
//
// 2. The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The
// client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
//
// 3. Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

/**
 * Prepares a juice of the specified size with predefined ingredients.
 *
 * @param {string} size - The size of the juice to be made.
 * @return {void} This function does not return any value.
 */
function makeJuice(size) {
  /**
   * Combines the provided ingredients into a description of a juice order
   * and displays it on the webpage.
   *
   * @param {string} ing1 - The first ingredient to include in the juice.
   * @param {string} ing2 - The second ingredient to include in the juice.
   * @param {string} ing3 - The third ingredient to include in the juice.
   * @return {void} - Does not return a value; modifies the DOM by adding a paragraph element.
   */
  function addIngredients(ing1, ing2, ing3) {
    const p = document.createElement('p');
    p.textContent = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
    document.body.appendChild(p);
  }
  addIngredients('apple', 'mint', 'ginger');
}

makeJuice('large');

// Part II:
// 1. In the makeJuice function, create an empty array named ingredients.
//
// 2. The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
//
// 3. Create a new inner function named displayJuice that displays on the DOM a sentence like:
// The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
//
// 4. The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE.
// Then invoke the displayJuice function once. Finally, invoke the makeJuice function in the global scope.

function makeJuice2(size) {
  const ingredients = [];

  /**
   * Adds the provided ingredients to the ingredients list.
   *
   * @param {string} ing1 - The first ingredient to add.
   * @param {string} ing2 - The second ingredient to add.
   * @param {string} ing3 - The third ingredient to add.
   * @return {void} This function does not return a value.
   */
  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  /**
   * Displays a paragraph element on the webpage describing a juice order.
   * The displayed text includes the juice size and its ingredients.
   *
   * @return {void} Does not return a value.
   */
  function displayJuice() {
    const p = document.createElement('p');
    p.textContent = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
    document.body.appendChild(p);
  }

  addIngredients('orange', 'carrot', 'ginger');
  addIngredients('celery', 'lemon', 'turmeric');
  displayJuice();
}

makeJuice2('medium');