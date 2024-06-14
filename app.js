// exercise

// var firstNumber = +prompt("Enter a first integer");
// var secondNumber = +prompt("Enter a integer");
//  if (firstNumber > secondNumber){
//     console.log(firstNumber + " is large interger")
// } else if (firstNumber < secondNumber){
//     console.log(secondNumber + " is large interger")
// }else if (firstNumber == secondNumber){
//     console.log(firstNumber + " and " + secondNumber + ": both are equal")
// }

// input a number from user & state whether the number is positive, negative or zero.

// var num = +prompt("enter an number");

// if (num == 0){
//     console.log("number is zero" + num)
// } else if (num > 0){
//         console.log("number is positive " + num)
// }else if(num < 0){
//     console.log("number is negative " + num)
// }

// Check vowel or not

// var vowel = prompt("Enter a character");
// if(vowel.length <= 1 && vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u"){
//     console.log(vowel + " is vowel")
// }
// else{
//     console.log(vowel + " is not vowel")
// }

// check password correct or not

// var password = prompt("Please enter your password");
// var confirmPassword = "password4pass";

// if(password == confirmPassword){
//     console.log("password is correct")
// }else if(password == ""){
// console.log("Please enter a password")
// }
// else{
//     console.log("password is not correct")
// }

// fix promblem in if else condition

// var greeting;

// var hour = 13;

// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// console.log(greeting);

// takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
// var internationalTime = prompt("Please Enter hour");
// var localTime = 12;









// if (internationalTime === "") {
//     console.log("Please enter a valid numeric value");
// }
// else{
//     internationalTime = Number(internationalTime);
    
//     if (internationalTime < 0) {
//         console.log("this is not a valid time");
//     }

//     else if (internationalTime == 0) {
//         console.log(internationalTime + " is equal to 12:00");
//     }

//     else if (internationalTime <= 12) {
//         console.log(internationalTime , "hour");
//     }

//     else if (internationalTime <= 24 && internationalTime >= 0) {
//         console.log(internationalTime - localTime);
//     }

//     else if (internationalTime <= 2400 && internationalTime >= 0){
//         console.log(internationalTime - 1200);
//     }

    
//     else {
//         console.log("invalid input");
//     }
// }





// IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION | JAVASCRIPT
// var time = +prompt ("enter time");

// if(time >= 0 && time <= 1200){
//     console.log("Good Morning")
// }
// else if(time >= 1300 && time <= 1800){
//     console.log("Good Afternoon")
// }
// else{
//     console.log("Good night")
// }






// palindrome word
// var userName = prompt("Enter plalindrome word")
// var result = ""
// for(var i = userName.length -1; i >= 0; i--){
//     result += userName[i]
// }

// if(userName == result){
//     console.log("plalindrome word" , result); 
// }else {
//     console.log("NOT plalindrome word", result);
// }

