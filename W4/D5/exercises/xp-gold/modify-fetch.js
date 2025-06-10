// Exercise 4: Modify fetch with Async/Await
// Using this code:

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];

// const getData = async function () {
//     const [users, posts, albums] = await Promise.all(urls.map(url =>
//         fetch(url).then(resp => resp.json())
//     ));
//     console.log('users', users);
//     console.log('posts', posts);
//     console.log('albums', albums);
// }
//
// getData()
//
// 1. Modify the function above. Add async await in place of the following line:
// fetch(url).then(resp => resp.json())
// So there shouldn’t be any .then() calls anymore!
//
// 2. Add a try catch block in order to catch any errors.
// To test the catch, modify one of the urls. The catch should console.log ‘ooooooops’.

const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(async (url) => {
                const response = await fetch(url);
                return response.json();
            }
        ));
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (error) {
        console.log('ooooooops:', error);
    }
}

getData()
