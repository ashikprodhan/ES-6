const doubleIt = num => num * num;
// here doubleIt is function , num is parameter , Num * 2 is return type 
// const result = doubleIt(7);
// console.log(result);

// function with two parameter 
const add =(x ,y) => x + y;
const result= add(4,5);
console.log(result);

// function with no parameter 
const give5 =() => 6;
const result2 = give5() ;
console.log(result2);

// do Math 
const doMath =(x , y ) =>{
    const sum = x + y ;
    const difference = x - y;
    const result = sum * difference ;
    return result ;
}

const result3 = doMath(7, 3);
console.log(result3);