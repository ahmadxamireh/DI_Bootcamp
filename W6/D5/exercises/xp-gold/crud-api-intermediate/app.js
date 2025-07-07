// import the express module and create an instance of an Express app
import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json()); // parse JSON bodies

// Set up the app to listen on port 3000.
// Print a message in the console to indicate that the server is running.
const PORT = process.env.PORT || 3000;

// create the following endpoints for CRUD operations:
// 1. Read All Posts: GET /api/posts
app.get('/api/posts', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        if (response.status !== 200) return res.status(response.status).send(response);
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
});

// 2. Read Single Post: GET /api/posts/:id
app.get('/api/posts/:id', async (req, res) => {
    try {
        const post = await axios.get('https://jsonplaceholder.typicode.com/posts/' + req.params.id);
        if (!post) return res.status(404).send('Post not found');
        res.json(post.data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
});

// 3. Create Post: POST /api/posts
app.post('/api/posts', async (req, res) => {
    try {
        const newPost = await axios.post('https://jsonplaceholder.typicode.com/posts', req.body);
        res.status(201).json(newPost.data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
});

// 4. Update Post: PUT /api/posts/:id
app.put('/api/posts/:id', async (req, res) => {
    try {
        const updatedPost = await axios.put(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, req.body);
        res.json(updatedPost.data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
});

// 5. Delete Post: DELETE /api/posts/:id
app.delete('/api/posts/:id', async (req, res) => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
        res.send('Post deleted');
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
});

// handle unmatched routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Start the Express server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));