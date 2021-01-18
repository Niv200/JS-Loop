alert("Question 3");
let firstNumber = Number(prompt("First number"));
let secondNumber = Number(prompt("Second number"));
let thirdNumber = Number(prompt("Third number"));
let sort = "<Largest-Smallest> ";

if(firstNumber > secondNumber){
    if(firstNumber > thirdNumber){
        sort = sort + firstNumber;
        if(thirdNumber > secondNumber){
            sort = sort + " " + thirdNumber + " " + secondNumber;
        }else{
            sort = sort + " " + secondNumber + " " + thirdNumber;
        }
    }
}

if(secondNumber > firstNumber){
    if(secondNumber > thirdNumber){
        sort = sort + " " + secondNumber;
        if(firstNumber > thirdNumber){
            sort = sort + " " + firstNumber + " " + thirdNumber;
        }else{
            sort = sort + " " + thirdNumber + " " + firstNumber;
        }
    }
}

if(thirdNumber > secondNumber){
    if(thirdNumber > firstNumber){
        sort = sort + " " + thirdNumber;
        if(secondNumber > firstNumber){
            sort = sort + " " + secondNumber + " " + firstNumber;
        }else{
            sort = sort + " " + firstNumber + " " + secondNumber;
        }
    }
}

alert(sort);
