// 🌟 Exercise 1: Location
// Instructions
// Analyze the code below. What will be the output?

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log('This is object destructuring, it will assign the values to the variables based on property names.')

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);