//Array vs objects
var shoppingItems = ['book','sunglass','shoes','pen'];
var friendAge = [7,5,88,55,44,32];
var friendAge = {
    rahim: 45,
    karim:88,
    rasel: 4,
    jarin:9,
    worthy: 10
}



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

const keys = Object.keys(shoppingCard);
console.log(keys); 

const values = Object.values(shoppingCard);
console.log(values);

//var keys = [ 50, 78, 4, 25, 8, 'apache', 'Nikon', 'Tiya Pakhi']
for(var i =0; i<keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCard[propertyName];
    console.log(propertyName,propertyValue);
    
}