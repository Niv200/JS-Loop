alert("Question 2");
let firstNumber = Number(prompt("First number"));
let secondNumber = Number(prompt("Second number"));
let thirdNumber = Number(prompt("Third number"));
let message = "0";

let sum = firstNumber * secondNumber * thirdNumber;
if(sum > 0){
    message = "+";
}
if(sum < 0){
    message = "-";
}
if(sum === 0){
    message = "0";
}

alert("The sign of the sum is " + message);
