// import the express module and create an instance of an Express app.

import express from 'express';

const app = express();

// import the dataService module you created.
import {fetchPosts} from "./dataService.js";

// Create an endpoint in your Express app that uses the fetchPosts function from the
// dataService module to retrieve data from the JSONPlaceholder API.

app.get('/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        res.status(200).json(posts);
        console.log('Posts successfully retrieved and sent to client.');
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
})

// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.
app.listen(5000, 'localhost', () => console.log('Server is running on http://localhost:5000'));
