class Moment extends Date{
    // constructor(){
    //     super();
    // }
    constructor(year){
        super(year);
    }
}
var m=new Moment("Augest 15,1947 20:22:10");
console.log("Current Date");
console.log(m.getDate()+"-"+(m.getMonth()+1)+"-"+m.getFullYear());
console.log(m.getFullYear());
