const number =[1,2,3,4,5,6,7,8];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element > 3) {
        break;
        
    }
    // console.log(element);
    
}
const numbers =[1,-2,-3,4,-5,6,7,8];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < 0) 
{ continue;
        
    }
    console.log(element);
    
}