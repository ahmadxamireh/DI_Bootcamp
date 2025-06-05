// 🌟 Exercise 4: Vacation Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:
//
// 1. Define a function called hotelCost().
// - It should ask the user for the number of nights they would like to stay in the hotel.
// - If the user doesn’t answer or if the answer is not a number, ask again.
// - The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost(numOfNights) {
    return numOfNights * 140
}

// 2. Define a function called planeRideCost().
// - It should ask the user for their destination.
// - If the user doesn’t answer or if the answer is not a string, ask again.
// - The function should return a different price depending on the location.
// “London”: 183$
// “Paris”: 220$
// All other destinations: 300$

function planeRideCost(destination) {
    switch (destination.toLowerCase()) {
        case "london":
            return 183
        case "paris":
            return 220
        default:
            return 300
    }
}

// 3. Define a function called rentalCarCost().
// - It should ask the user for the number of days they would like to rent the car.
// - If the user doesn’t answer or if the answer is not a number, ask again.
// - Calculate the cost to rent the car. The car costs $40 everyday.
// - If the user rents a car for more than 10 days, they get a 5% discount.
// - The function should return the total price of the car rental.

function rentalCarCost(numOfDays) {
    let total = numOfDays * 40
    return numOfDays > 10 ? total * 0.95 : total
}

// 4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3
// functions that you created above.
// Example: The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function
// totalVacationCost().

function totalVacationCost() {
    // 6. Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the
    // totalVacationCost() function. You need to change the 3 first functions, accordingly.

    let nightsAtHotel;
    do {
        nightsAtHotel = prompt("Enter the number of nights you would like to stay at the hotel:")
    } while (isNaN(Number(nightsAtHotel)))

    let hotelTotal = hotelCost(parseInt(nightsAtHotel))

    let destination;
    do {
        destination = prompt("Enter a destination:")
    } while (!isNaN(destination) || destination === "")

    let flightTotal = planeRideCost(destination)

    let carRentalDays;
    do {
        carRentalDays = prompt("Enter the number of days you would like to rent a car:")
    } while (isNaN(carRentalDays))

    let carRentalTotal = rentalCarCost(parseInt(carRentalDays))

    let vacationCost = hotelTotal + flightTotal + carRentalTotal

    console.log(`The car cost: $${carRentalTotal}, the hotel cost: $${hotelTotal}, the plane tickets cost: $${flightTotal}.`)
    console.log(`Your total vacation cost is $${vacationCost}.`)
}

// 5. Call the function totalVacationCost()
totalVacationCost()
