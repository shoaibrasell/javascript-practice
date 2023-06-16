/*
1. chair --> 3 cft
2.table --> 10 cft
3. bed --> 50 cft 
*/     
function woodCalculator (chairQuantity , tableQuantity, bedQuantity){
    const perChairWood = 3 ;
    const perTableWood=  10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const TableWood = tableQuantity * perTableWood;
    const BedWood =  bedQuantity * perBedWood ;

    const totalWood = chairWood + TableWood + BedWood;
    return totalWood;

}
const totalWood = woodCalculator(5,6,8);
console.log(totalWood);