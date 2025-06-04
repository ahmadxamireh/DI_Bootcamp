// 🌟 Exercise 7: Welcome
// Instructions
// John has just signed in to your website, and you want to welcome him.
//
// 1. Create a Navbar in your HTML file.
// 2. In your js file, create a self-invoking function that takes 1 argument: the name of the user that just signed in.
// 3. The function should add a div in the Navbar, displaying the name of the user and his profile picture.

(function (name) {
    const div = document.createElement('div');
    div.innerHTML = `<img src="https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg" alt="User's profile picture"> ${name}`;
    document.querySelector('nav').appendChild(div);
})('Michael Smith')
