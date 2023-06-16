let first = 5;
let second = 7;
console.log(first, second);

//approach 1
// const temp = first;
// first = second;
// second = temp;


//approach 2--- destruction  ---its a easy way 
[first , second] = [second, first];
console.log(first, second);