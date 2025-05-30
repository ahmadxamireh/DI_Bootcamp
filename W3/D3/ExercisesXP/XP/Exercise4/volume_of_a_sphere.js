// 🌟 Exercise 4: Volume of a sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere.

// The formula to calculate the volume of a sphere is: V = (4/3)πr³
// where V is the volume, π is approximately 3.14159, and r is the radius of the sphere.

const radius = document.getElementById("radius");
const volume = document.getElementById("volume");
volume.disabled = true;

function calculateSphereVolume() {
    return (4 / 3) * Math.PI * Math.pow(radius.value, 3)
}

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); // to avoid adding values to the URL
    if (radius.value.length !== 0 && !isNaN(radius.value)) {
        volume.value = calculateSphereVolume().toFixed(2); // round the value to 2 decimal numbers
    } else {
        alert('Invalid value for radius, try again.')
        radius.value = '';
    }
})