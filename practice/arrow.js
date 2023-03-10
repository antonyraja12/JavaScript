function person(){
    this.name="jack",
    this.age=23,
    this.sayName=function(){
        console.log(this.age);
    
   const innerfun =()=>{
        console.log(this.age);
        console.log(this);
    }
    innerfun();
}
}
let x=new person();
x.sayName();