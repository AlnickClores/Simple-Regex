// test and match funtion regex Javascript

let string = "I love to play codewars coDewaRs";
/*
'i' and 'g' are called "flags" (there are total of 6 flags...)
i - case-insensitive (will neglect uppercase and lowercase characters)
g - looks for all matches
*/
let regexWord = /codewars/ig;  

//.test() - returns true if the "regexWord" is present in "String" otherwise, false
const testFunction = () => {
    return regexWord.test(string);
}

//.match() - returns the word that matches the "regexWord" from "String"
const matchFunction = () => {
    return string.match(regexWord);
}

console.log("Result: " + testFunction(string, regexWord));
console.log("Result: " + matchFunction(string, regexWord));
