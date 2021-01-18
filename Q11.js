alert("Question 11");
let firstNumber = Number(prompt("First number"));
let secondNumber = Number(prompt("Second number"));

function calculateGCD(num1, num2){
    while(num1 != num2){
        if(num1 > num2){
            num1 = num1 - num2;
        }else{
            num2 = num2 - num1;
        }
    }
    return num1;
}

alert(calculateGCD(firstNumber, secondNumber));