// require the axios package and use it to make an HTTP GET request to a JSON placeholder API
// (e.g., https://jsonplaceholder.typicode.com/posts) and fetch a list of posts.

import axios from 'axios'; // doesn't work with CommonJS

export async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        if (response.status === 200) {
            // Display the title of each post in the terminal.
            response.data.forEach(post => console.log(post.id, post.title));
        }
    } catch (e) {
        console.log('Failed to fetch data:', e);
    }
}