for(i = 1; i <= 100; i++){
    let msg = "";
    if(i % 3 === 0){
        msg = msg + "Fizz";
    }
    if(i % 5 === 0){
        msg = msg + "Buzz";
    }
    if(!(i % 3 === 0) && !(i % 5 === 0)){
        msg = i;
    }
    alert(msg);
}