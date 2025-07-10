import db from '../config/db.js';

export async function getAllPosts() {
    return db('posts').select('*');
}

export async function getPostById(id) {
    const [post] = await db('posts').where({ id });
    return post;
}

export async function createPost(postData) {
    const [newPost] = await db('posts').insert(postData).returning('*');
    return newPost;
}

export async function updatePost(id, postData) {
    const [updatedPost] = await db('posts').where({ id }).update(postData).returning('*');
    return updatedPost;
}

export async function deletePost(id) {
    const [deletedPost] = await db('posts').where({ id }).delete().returning('*');
    return deletedPost;
}