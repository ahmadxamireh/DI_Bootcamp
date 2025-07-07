// Exercise 1: Building a RESTful API
// You’re tasked with building a RESTful API for a blog platform.
// Users should be able to create, read, update, and delete blog posts using different endpoints.

// require the express package and set up an Express app
import express from 'express';

const app = express();

// Create a data array to simulate a database.
// Each item in the array should represent a blog post with properties like id, title, and content.
let posts = [];

// Implement the following routes using Express:
// 1. GET /posts: Return a list of all blog posts.
app.get('/posts', (req, res) => {
    if (posts.length === 0) {
        res.send('The posts array is empty.');
        return;
    }
    res.json(posts);
});

// 2. GET /posts/:id: Return a specific blog post based on its id.
app.get('/posts/:id', (req, res) => {
    const postId = Number(req.params.id);
    const post = posts.find(post => post.id === postId);
    if (!post) {
        res.status(404).send(`Post with id ${postId} was not found.`);
        return;
    }
    res.json(post);
});

// 3. POST /posts: Create a new blog post.
app.use(express.json()); // Parse JSON bodies: Parses incoming requests with JSON payloads & Puts the parsed data in req.body
app.post('/posts', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title, // Access parsed JSON
        content: req.body.content // Access parsed JSON
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// 4. PUT /posts/:id: Update an existing blog post.
app.put('/posts/:id', (req, res) => {
    const postId = Number(req.params.id);
    const index = posts.findIndex(post => post.id === postId);
    if (index < 0) return res.status(404).send(`Post with id ${postId} was not found.`);
    posts[index] = {
        id: postId,
        title: req.body.title,
        content: req.body.content
    };
    res.status(200).json(posts[index]);
});

//5. DELETE /posts/:id: Delete a blog post.
app.delete('/posts/:id', (req, res) => {
    const postId = Number(req.params.id);
    const index = posts.findIndex(post => post.id === postId);
    if (index < 0) return res.status(404).send(`Post with id ${postId} was not found.`);
    const deletedPost = posts.splice(index, 1)[0]; // store the deleted post
    res.status(200).json(deletedPost);
});

// start the server
app.listen(3000, 'localhost', () => console.log('Server is running on http://localhost:3000'));

// handle unmatched routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});