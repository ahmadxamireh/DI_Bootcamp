// import the axios module and create a function named fetchPosts that makes a
// GET request to the JSONPlaceholder API to fetch data for all posts.
// Export the fetchPosts function.

import axios from "axios";

export async function fetchPosts() {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        if (res.status !== 200) throw new Error(`Request failed with status ${res.status}`);
        return res.data;
    } catch (err) {
        console.error('fetchPosts error:', err.message);
        throw err; // let the calling code handle the error
    }
}