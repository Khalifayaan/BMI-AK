// Good Luck! You got this 💪🏾
// Write your code here.


function calculateBMI(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}

// Calculate BMI for Ali
var aliWeight = 99;   // weight in kilograms
var aliHeight = 1.7;  // height in meters
var aliBMI = calculateBMI(aliWeight, aliHeight);

// Calculate BMI for Mohamed
var mohamedWeight = 73;    // weight in kilograms
var mohamedHeight = 1.86;  // height in meters
var mohamedBMI = calculateBMI(mohamedWeight, mohamedHeight);

// Compare BMI
if (aliBMI > mohamedBMI) {
    console.log("Ali has a higher BMI.");
} else if (mohamedBMI > aliBMI) {
    console.log("Mohamed has a higher BMI.");
} else {
    console.log("Ali and Mohamed have the same BMI.");
}
