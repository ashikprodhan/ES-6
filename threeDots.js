const ages =[11, 14,16,13,17];
const ages2 =[14, 16, 17, 18];

const ages3 =[34, 36, 37, 38];
const allAges =ages.concat(ages2).concat([5]).concat(ages3);
const allAges2=[...ages,...ages2, 5, ...ages3];// add  spread operator ... for better code  
console.log(allAges2);
console.log(allAges);