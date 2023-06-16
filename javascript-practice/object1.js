const nayok = {
    name: 'Shoaib Ullah Rasel',
    id: 18203096,
    address:'Uttara dhaka bangladesh',
    isSingle: true,
    friend: ['ashik','pappu','worthy','tonny','mamun'],
    movie:[ {name:'No.2 ', year: 2023 },{name:'king khan', year: 2022}],
    act: function(){
        console.log('Acting like Amir Khan ');
    },
    car:{
        brand : 'tesla',
        price: 500000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elan Mask',
            country: 'saudi'
        }
    }
}

console.log (nayok.act);
nayok.act();