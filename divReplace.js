//Write a function that takes one parameter (a whole number/integer) 
//and checks if numbers from 1 to the given parameter (inclusive) are divisible by 2,3,5 
//while replacing with the appropriate words as specified below.
let numbers = [];
function divReplacement(arr) {
    for (let i = 1; i <= arr; i++) {
        if (i % 2 ==0 && i % 3 == 0 && i % 5 == 0) 
            numbers.push("yu-gi-oh");
        else if (i % 2 ==0 && i % 5 == 0) 
            numbers.push("yu-oh");
        else if (i % 3 ==0 && i % 5 == 0) 
            numbers.push("gi-oh");
        else if (i % 2 == 0 && i % 3 == 0) 
            numbers.push("yu-gi");
        else  if (i % 2 == 0) 
            numbers.push("yu");
        else if (i % 3 == 0) 
            numbers.push('gi');
        else if (i % 5 == 0) 
            numbers.push("oh");
        else
        numbers.push(i);
        }
//Return an array containing all numbers from 1 to the passed argument 

    return arr;
}
//Call the function and pass 100 as an argument.
divReplacement(100);

//Call the function and pass it a random number of your choice
divReplacement(10);
console.log(numbers);



    
