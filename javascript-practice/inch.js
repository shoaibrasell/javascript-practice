function inchToFeet (inches){
    const feet = inches / 12;
    return feet;

}
const InputInches = 188;
const InputFeet = inchToFeet(InputInches);
console.log("Here is the feet : ",InputFeet);

// function milesToKilometer (miles){
//     const kilometer = miles * 1.609;
//     return kilometer;
// }

