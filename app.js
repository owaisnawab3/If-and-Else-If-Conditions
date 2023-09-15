let input = prompt("Enter the number")
asciCode = input.charCodeAt(0)
if(asciCode >=48 && asciCode <=57){
    console.log("This is a number")
}else if(asciCode >=65 && asciCode <=90){
    console.log("This is a Uppercase letter.")
}else if(asciCode >=97 && asciCode <=122){
    console.log("This is a Lowercase letter.")
}else{
    console.log("Involid Number")
}

let number1 = Number(prompt("Enter the 1st number"))
let number2 = Number(prompt("Enter the 2nd number"))


let num1 = Number(prompt("Enter the first number"))
let num2 = Number(prompt("Enter the second number"))
if(num1 > num2){
    console.log(num1 +" First Number is large form Second Number.")
    alert(num1 +" First Number is large form Second Number.")
}
else if(num2 > num1){
    console.log(num2 +" Second Number is large form First Number.")
    alert(num2 +" Second Number is large form First Number.")
}
else if(num1 === num2){
    console.log(num1 + ","+ num2 +" The two integers are equal.")
    alert(num1 + ","+ num2 +" The two integers are equal.")
}else{
    console.log("Involed Operation")
    alert("Involed Operation!")
}

let userNumber = Number(prompt("Enter any number"))
if(userNumber === 0){
    console.log("Your number is Zero.")
}
else if(userNumber > 0){
    console.log("your number is Positive.")
}
else if(userNumber < 0){
    console.log("your number is Negative.")
}
else{
    console.log("Invalid Opretion.")
}
let userNumber1 = prompt("Enter the Vowel Alphabet")
if(userNumber1 === "A"){
    console.log("true")
}else if(userNumber1 === "a"){
    console.log("true")
}else if(userNumber1 === "E"){
    console.log("true")
}else if(userNumber1 === "e"){
    console.log("true")
}else if(userNumber1 === "I"){
    console.log("true")
}else if(userNumber1 === "i"){
    console.log("true")
}else if(userNumber1 === "O"){
    console.log("true")
}else if(userNumber1 === "o"){
    console.log("true")
}else if(userNumber1 === "U"){
    console.log("true")
}else if(userNumber1 === "u"){
    console.log("true")
}
else{
    console.log("false")
}

let userPassword = prompt("Enter your password!")
let userPassword1 = prompt("Confirm your password.")
let password;

if (!userPassword) {
    alert("Please enter your password.");
}
else if(userPassword === userPassword1){
    console.log("Correct Password.")
    alert("Correct Password!")
}
// else if(!userPassword){
//     console.log("please enter your password!")
//     alert("Please enter your password!")
// }
else{
    console.log("Incorrect Password")
    alert("Incorrect Password!")
}

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}


let userHour = prompt("What is your time of day?")
if(!userHour) {
    alert("Please enter your time of day.");
}
else if(userHour <= 2 +"am"){
    console.log("This is not a good time to wake up!\nGood Night")
    alert("This is not a good time to wake up\nGood Night")
}
else if(userHour < 3 +"am"){
    console.log("Go to sleep, it's not good to stay up so late")
    alert("Go to sleep, it's not good to stay up so late")
}
else if(userHour < 5 +"am"){
    console.log("This is a very good time to pray Tahajjud Go to sleep after praying")
    alert("This is a very good time to pray Tahajjud Go to sleep after praying")
}
else if(userHour <= 8 +"am"){
    console.log("This is a very good time to pray namaz of fajar")
    alert("This is a very good time to pray namaz of fajar")
}
else if(userHour <= 10 +"am"){
    console.log("It's time for Breakfast!")
    alert("It's time for Breakfast!")
}
else if(userHour <= 11 +"am"){
    console.log("Good Morning.\nHave a Nice Day!")
    alert("Good Morning.\nHave a Nice Day!")
}
else if(userHour <= 1 +"pm"){
    console.log("Lunch Time.\nHave a Nice Day!")
    alert("Lunch Time\nHave a Nice Day!")
}
else if(userHour <= 3 +"pm"){
    console.log("If you have not prayed the Zuhr prayer, do so\nHave a Nice Day!")
    alert("If you have not prayed the Zuhr prayer, do so\nHave a Nice Day!")
}
else if(userHour <= 6 +"pm"){
    console.log("Good Evening!")
    alert("Good Evening!")
}
else if(userHour <= 8 +"pm"){
    console.log("This is the time for Maghrib prayer!")
    alert("This is the time for Maghrib prayer!")
}
else if(userHour <= 9 +"pm"){
    console.log("This is the time for the Isha prayer!")
    alert("This is the time for the Isha prayer!")
}
else if(userHour <= 10 +"pm"){
    console.log("It's time for dinner!")
    alert("It's time for dinner!")
}
else if(userHour <= 12 +"am"){
    console.log("It's time to sleep!\nGood Night.")
    alert("It's time to sleep!\nGood Night.")
}else{
    console.log("Invalid Operation\am or pm is Compulsory")
    alert("Invalid Operation\am or pm is Compulsory")
}