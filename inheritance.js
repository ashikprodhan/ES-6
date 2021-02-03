class Parent{
    constructor( ) {
        this.fatherName ="khan";

        
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name= name;
    }
   get FullName(){
        return this.name + ' '+this.fatherName;
    }
}
const child1 = new Child('abram');
console.log(child1.FullName);