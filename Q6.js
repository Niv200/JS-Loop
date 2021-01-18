let students = [["David", 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

let avg = 0;
let total = 0;

for(let i = 0; i < students.length; i++){
    total = total + students[i][1];
}
avg = total / students.length;
alert("Average: " + avg);
if(avg < 60){
    alert("Average grade: F")
}else if(avg < 70){
    alert("Average grade: D")
}else if(avg < 80){
    alert("Average grade: C")
}else if(avg < 90){
    alert("Average grade: B")
}else if(avg < 100){
    alert("Average grade: A")
}