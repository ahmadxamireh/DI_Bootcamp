/*
 🌟 Exercise 4 : Building Management
 Instructions:
 const building = {
 numberOfFloors: 4,
 numberOfAptByFloor: {
 firstFloor: 3,
 secondFloor: 4,
 thirdFloor: 9,
 fourthFloor: 2,
 },
 nameOfTenants: ["Sarah", "Dan", "David"],
 numberOfRoomsAndRent:  {
 sarah: [3, 990],
 dan:  [4, 1000],
 david: [1, 500],
 },
 }


 Review about objects
 1. Copy and paste the above object to your JavaScript file.
 */
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}

// 2. Console.log the number of floors in the building.
console.log(building.numberOfFloors)

// 3. Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.thirdFloor)

// 4. Console.log the name of the second tenant and the number of rooms he has in his apartment.
let second_tenant = building.nameOfTenants[1]
console.log(second_tenant)
console.log(building.numberOfRoomsAndRent[second_tenant.toLowerCase()][0])

// 5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent.
// If it is, then increase Dan’s rent to 1200.
if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]
    > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200
}
