myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {

    myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

// I found a bug in the looping condition, with the "<=", this would mean it is trying to access an index that doesn't exist, causing the code to error out
// I fixed it by removing the "=" in the looping condition

class inputError extends Error {}

const validateNumber = function(number) {
    if (typeof number !== "number" || isNaN(number)) {
        throw new Error("Input is not a number");
    } else if (number < 0 || number > 100) {
        throw new inputError("Number must be within 0 and 100")
    } else {
        console.log("Number is valid");
    }
}


try {
    validateNumber(50); // Valid number within the range of 0-100
    validateNumber('abc'); // Throws: Input is not a number
} catch (error) {
    console.log("Number is not valid!!!");
}

try {
    validateNumber("abc");
} catch(error) {
    console.log("Input is not a number");
}

console.log(validateNumber(-10));

