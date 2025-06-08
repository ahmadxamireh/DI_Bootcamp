// Daily Challenge: Car Inventory
//
// Part I
//
// 1. Create a function getCarHonda(carInventory) that takes a single parameter.
// - carInventory's value is an array that is an inventory of cars (see the array of objects below)
// 2. The function should
// - loop through the array of objects and return the first car with the name “Honda”.
// - then, return a string in the format This is a {car_make} {car_model} from {car_year}.
// Hint: Find an array method that returns the value of the first element in an array that passes a test.
// Use the cars inventory below:

const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

function getCarHonda(carInventory) {
    let car = carInventory.find(car => car.car_make === 'Honda')
    return `This is a ${car.car_make} ${car.car_model} from ${car.car_year}.`
}

console.log(getCarHonda(inventory));

// Part II
//
// 1. Create a function sortCarInventoryByYear(carInventory) that takes a single parameter.
// 2. The function should return an inventory sorted by car_year, ascending.

function sortCarInventoryByYear(carInventory = []) {
    carInventory.sort((a, b) => a.car_year - b.car_year);
    return carInventory
}

console.log(sortCarInventoryByYear(inventory));