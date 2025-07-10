// import everything that is exported from postModel.js, and group it under the name Post.
import * as Post from '../models/postModel.js'

// GET /posts: Return a list of all blog posts.
export async function getAll(req, res, next) {
    try {
        const posts = await Post.getAllPosts();
        res.json(posts);
    } catch (err) {
        next(err);
    }
}

// GET /posts/:id: Return a specific blog post based on its id.
export async function getById(req, res, next) {
    try {
        const postId = Number(req.params.id);
        const post = await Post.getPostById(postId);
        if (!post) return res.status(404).send('Post not found');
        res.json(post);
    } catch (err) {
        next(err);
    }
}

// POST /posts: Create a new blog post.
export async function createPost(req, res, next) {
    try {
        const { title, content } = req.body;
        if (!title || !content) return res.status(400).send('Blog post title or content are missing.');
        const newPost = await Post.createPost({ title, content });
        res.status(201).json(newPost);
    } catch (err) {
        next(err);
    }
}

// PUT /posts/:id: Update an existing blog post.
export async function updatePost(req, res, next) {
    try {
        const postId = Number(req.params.id);
        const post = await Post.getPostById(postId);
        if (!post) return res.status(404).send('Post not found');

        const { title, content } = req.body;
        const updatedPost = await Post.updatePost(postId, {
            title: typeof title === 'undefined' ? post.title : title,
            content: typeof content === 'undefined' ? post.content : content
        });

        res.json(updatedPost);
    } catch (err) {
        next(err);
    }
}

// DELETE /posts/:id: Delete a blog post.
export async function deletePost(req, res, next) {
    try {
        const postId = Number(req.params.id);
        const deletedPost = await Post.deletePost(postId);
        if (!deletedPost) return res.status(404).send('Post not found');
        res.json(deletedPost);
    } catch (err) {
        next(err);
    }
}