const username = "Nipun";
const age = 33;
const job = "Software Developer";

const summarizeUser = (userName, userAge, userJob)  =>{
  return `Name is ${userName}, age is ${userAge} and job is ${userJob}`;
}

console.log(summarizeUser(username, age, job));

//If there is only one return statement, we can remove the return keyword and curly braces
const add = (a, b) => a + b;
console.log(add(1, 2));

//If there is only one variable statement, we can remove the parenthesis
const addOne = a => a + 1;
console.log(addOne(1));

//If there are no arguments, we need to use empty parenthesis
const addTwo = () => 2;
console.log(addTwo());