/*
Exercise 1: TypeScript Generics and Intersection Types
Create a generic class Container that can store and manage items of types combined using intersection types.
Define methods to add, remove, and list items. Use generic types to ensure flexibility.
 */

class Container<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(item: T): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    list(): T[] {
        return this.items;
    }
}

// combined types example

interface Nameable {
    name: string;
}

interface Identifiable {
    id: number;
}

type NameWithId = Nameable & Identifiable;

// test

const nameIdContainer = new Container<NameWithId>();

nameIdContainer.add({name: "Ahmad", id: 1});
nameIdContainer.add({name: "Layla", id: 2});

console.log(nameIdContainer.list()); // [ { name: 'Ahmad', id: 1 }, { name: 'Layla', id: 2 } ]

// this will not work unless it's the exact object reference
// meaning we would have to delete { name: 'Ahmad', id: 1 }, { name: 'Layla', id: 2 }
nameIdContainer.remove({name: "Ahmad", id: 1});

console.log(nameIdContainer.list()); // no change: [ { name: 'Ahmad', id: 1 }, { name: 'Layla', id: 2 } ]

/*
Exercise 2: Generic Interfaces and Type Casting
Define a generic interface Response<T> for handling API responses, where T is the type of data in the response.
Create a function parseResponse that casts the response data to the desired type and returns it.
 */

interface MyResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

function parseResponse<T>(rawResponse: any): MyResponse<T> {
    return rawResponse as MyResponse<T>;
}

// Example type
type User = {
    id: number;
    name: string;
};

// Simulated API response (e.g. from JSON.parse or fetch)
const rawUserResponse = {
    success: true,
    data: {
        id: 1,
        name: "Ahmad"
    }
};

// Use parseResponse to cast it
const parsedUserResponse = parseResponse<User>(rawUserResponse);

console.log(parsedUserResponse.data.name); // Ahmad

/*
Exercise 3: Generic Classes and Type Assertions
Create a generic class Repository<T> that stores items of type T.
Implement methods to add, retrieve, and list items.
Use type assertions to ensure type safety when retrieving items.
 */

class Repository<T> {
    private items: T[] = []

    add(item: T): void {
        this.items.push(item);
    }

    retrieve(item: T): T | undefined {
        const index = this.items.indexOf(item);
        return index !== -1 ? this.items[index] : undefined;
    }

    list(): T[] {
        return this.items;
    }
}

// test

const repo = new Repository<string>()
repo.add("Ahmad");
repo.add("Layla");
console.log(repo.retrieve("User")); // undefined
console.log(repo.list()); // [ 'Ahmad', 'Layla' ]