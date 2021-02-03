const students =[
    {
        name:'Ashik',
        id:27
    }
    ,
    {name:'Ranga',id:21},{name:'Abid',id:14},
    {name:'Sobuj', id:40},
    {name:'Shojol',id:33}
];

const names=students.map(n => n.name);
const ids=students.map(n => n.id);
const biggerId=students.filter(n => n.id > 21);// filter will return all the matching elements
const smallerId=students.find(n => n.id < 27);// this will return first matching element 

console.log(smallerId);
console.log(biggerId);
console.log(names,ids);