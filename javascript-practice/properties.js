var shoppingCard = {
    book : 50,
    phone : 78,
    keyboard : 4,
    pen : 25,
    sunglass : 8,
    pendrive : "apache",
    camera : "Nikon",
    bards : "Tiya Pakhi"

}
// console.log(shoppingCard);
// shoppingCard.book = 800;
// console.log(shoppingCard.book);
var penCount = shoppingCard.keyboard;
console.log(penCount);
var properties = Object.keys(shoppingCard);
var propertiesValues = Object.values(shoppingCard);
console.log(properties);
console.log(propertiesValues);
