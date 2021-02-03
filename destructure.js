const person ={
    name:'Ema watson', phone: 44553, age : 23, job:'facebooker',gfName:'Gomej'
,friends:['tom cruiz','tony','bell']};

// const gfName =person.gfName;
// const phone = person.phone;
const { phone, gfName,age}=person;

console.log(gfName,phone,age);
const friends=['tom cruiz','tony','bell'];
const [first,...rest]= friends;
console.log(first,rest);