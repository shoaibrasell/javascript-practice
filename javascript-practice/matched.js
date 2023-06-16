// var $text = `Shoaib Ullah Rasel`;
// console.log($text);

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);

// const numbers = [45,88,99,44,77,55];

// for (const number of numbers){
//     // console.log(number)
// }
//array 
const products = [
    {id: 1, name:'M h mridul Bala', price:4588},
    {id: 2, name:'Shoaib Ullah Rasel',price:4588},
    {id: 3, name:'Ashiqur Rahman ashik',price:4588},
    {id: 4, name:'Parves samat pappu',price:4588},
    {id: 5, name:'M h mridul Bala',price:4588},
    {id: 6, name:'Shoaib Ullah Rasel',price:4588},
    {id: 7, name:'Ashiqur Rahman ashik',price:4588},
    {id: 8, name:'Parves samat pappu',price:4588},
]
// for (const product of products){
//     console.log(product);
// }
function matchProducts (product, search) {
    const matched = [];
    for (const product of products){ 
        console.log(product.name.includes(search))
    } 
}
const result = matchProducts(products, 'phone');
console.log(result);