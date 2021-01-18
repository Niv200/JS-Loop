let number = 1;

for(count = 0; count < 5; count){
    if(isHappy(number)){
        count++;
        alert(number + " is a happy number!", number);
    }
    number++;
}


function digitsSquared(num){
    let sum = 0;
    for(i = num; i >= 1; i = Math.floor(i/10)){
        sum = sum + (i % 10) * (i % 10);
    }
    return sum;
}

function isHappy(num){
    let c = [];
    while(num !== 1 && c[num] !== true){
        c[num] = true;
        num = digitsSquared(num);
    }
    if(num === 1){
        return true;
    }else{
        return false;
    }
}