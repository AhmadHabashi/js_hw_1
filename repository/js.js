// "True or False".

//1
//כן תהיה Alert 
if("0"){
  alert( 'hello' );
}


//2
let answer = prompt("What Is the offical name of JavaScript");
if(answer==="ECMAScript"){
  alert("!Correct");
}
  else{
    alert("Dont Know !ECMAScript");
  }

  

//3
let score = 75;
let grade;

let output = score >= 90 ? "A" :
  score >= 80 ? "B" :
  score >= 70 ? "C" :
  score >= 60 ? "D" : "F";

console.log("The Grade Is: ",output);

//4
let answer1 = prompt("Enter A Number") ;
if(answer1>1)
  alert("Num > 1");
else
if(answer1<0)
  alert("Num < 0");
else
if(answer1==0)
  alert("Num Is zero");

//5
let a = 2;
let b = 3;
let result = (a + b < 4) ? 'Not enough' : 'A lot';

//6
let message = (login == 'Employee' || login == 'Director') ? 'Hello' : (login == '') ? 'No login' : message = '';


//7
console.log(false || 'sdf');//'sdf'
console.log(false && '');//false
console.log(true || '');//true
console.log(true && '');//''
console.log(undefined || null);//null
console.log(undefined || 0 || null);//null
console.log(undefined && 0 && null);//undefiend
console.log(1 || 0);//1
console.log(null || 1);//1
console.log(null || 0 || 1);//1



//-----------------------------------------------------------

//"Loops"

//1
let i = 1;
let sum = 0;
while (i <= 100) {
  sum += i;
  i++;
}
console.log("The Sum Is", sum);


//2
let number;

do {
  number = prompt("Please enter a positive number");
  number = Number(number);
} while (isNaN(number) || number <= 0);

console.log("The num is ", number);


//3
let num = 7;
for (let i = 1; i <= 10; i++) {
  console.log("7 *", i, "=", num * i);
}

//4
const secret = 7;

for (let i = 1; i <= 10; i++) {
  let num = prompt("Enter a num ")
  if (num == secret) break;
}
console.log("The secret num is: ", secret)

//5
for(let i= 1; i<=30 ; i++){
if (i % 3 == 0) continue;
alert(i);
}

//6
// הערך האחרון הוא 1 כי בלולה מוגדר הערך 3 והוא סופר לפי הערך או הגודל של הערך כאילו 3 2 1
//let i =3;
while (i) {
  alert(i--);
}

//7
//לא כי i++ מדפיס אחר כך עולה אבל ++i עולה אחר כך מדפיס 
// i++ = 1,2,3,4,5   ++i = 1,2,3,4

//8
//אותו דבר 0,1,2,3,4
for (let i = 0; i < 5; ++i) console.log(i);
for (let i = 0; i < 5; i++) console.log(i);

//9
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0)
    console.log(i);
}

//10
//let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
