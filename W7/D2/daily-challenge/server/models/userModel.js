import db from '../config/db.js'
import bcrypt from 'bcrypt';

export async function registerUser(userData) {
    const { first_name, last_name, username, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    // if one of the DB operation fails, it cancels everything and rolls back
    try {
        // start a transaction and return the new user
        return await db.transaction(async trx => {
            // insert the new user in the users table and return it
            const [user] = await trx('users')
                .insert({ first_name, last_name, username, email })
                .returning('*');
            // insert the hashed password in the hashpwd table
            await trx('hashpwd').insert({ username: username, password: hashedPassword });
            return user; // this returns the deconstructed user to the main function
        });
    } catch (err) {
        throw new Error('Registration failed: ' + err.message);
    }
}

export async function loginUser({ username, password }) {
    try {
        // fetch the user + hash in a single query
        const result = await db('users as u')
            .join('hashpwd as h', 'u.username', 'h.username')
            .select('u.id', 'u.first_name', 'u.last_name', 'u.username', 'u.email', 'h.password as hash')
            .where('u.username', username)
            .first() // returns undefined if no match

        if (!result) throw new Error('User not found');

        // user exists, now verify the password
        // first, deconstruct the result into hash (the hashed password) and user object (the remaining data)
        const { hash, ...user } = result;
        const isValidPassword = await bcrypt.compare(password, hash);

        if (!isValidPassword) throw new Error('Password not match');
        return user;
    } catch (err) {
        throw new Error('Login failed: ' + err.message);
    }
}

export async function getAllUsers() {
    return db('users').select('id', 'username', 'first_name', 'last_name', 'email')
        .orderBy('id', 'asc');
}

export async function getUserById(userId) {
    const [user] = await db('users').where('id', userId)
        .select('id', 'username', 'first_name', 'last_name', 'email');
    return user;
}

export async function updateUser(userId, updateData) {
    const { password, ...profile } = updateData;

    return db.transaction(async trx => {
        // 1. fetch current user
        const current = await trx('users')
            .where({ id: userId })
            .first();

        if (!current) {
            throw new Error(`User with ID ${userId} not found`);
        }

        // 2. update profile fields if any were supplied
        let updatedUser = current;
        if (Object.keys(profile).length) {
            [updatedUser] = await trx('users')
                .where({ id: userId })
                .update({
                    first_name: profile.first_name ?? current.first_name,
                    last_name: profile.last_name ?? current.last_name,
                    username: profile.username ?? current.username,
                    email: profile.email ?? current.email
                })
                .returning(['id', 'username', 'email', 'first_name', 'last_name']);
        }

        // 3. handle password change if provided
        if (password) {
            const hash = await bcrypt.hash(password, 10);

            // upsert hash row keyed by username (handles username change)
            await trx('hashpwd')
                .insert({ username: updatedUser.username, password: hash }) // try to insert a new row
                .onConflict('username') // if username already exists
                .merge({ password: hash }); // then update the record
        }

        return updatedUser;
    });
}

export async function deleteUser(userId) {
    const [deletedUser] = await db('users').where('id', userId).delete().returning('*');
    return deletedUser;
}