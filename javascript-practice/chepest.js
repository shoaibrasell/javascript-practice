const phones =[
    {name: 'Apple', camera : 15, storage: '56gb', price: 70000, color: 'silver'},
    {name: 'Sumsung', camera : 15, storage: '56gb', price: 10000, color: 'silver'},
    {name: 'HTC', camera : 15, storage: '56gb', price: 15000, color: 'silver'},
    {name: 'Redmi', camera : 15, storage: '56gb', price: 8000, color: 'silver'},
    {name: 'Walton', camera : 15, storage: '56gb', price: 18000, color: 'silver'},
    {name: 'OPP', camera : 15, storage: '56gb', price: 23000, color: 'silver'},
];

function cheapestPhone (phones){
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        console.log(phone);
    }
}

const mySelection = cheapestPhone(phones);