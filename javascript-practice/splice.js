const friend = [12,44,77,55,99,3,2,7,9,];

//Remove elements from an array 
//and if necessary, insertes new elements in their place,
//returning the deleted elements 
//will change the orginal array
const partial = friend.splice (1,5);
console.log(partial);
console.log(friend);