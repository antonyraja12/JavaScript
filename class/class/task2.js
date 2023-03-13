class shape{
    constructor(pname,side,sidelength){
        this.pname=pname;
        this.side=parseInt(side);
        this.sidelength=parseInt(sidelength);
    }
    
    calcPerimeter(){
        const p=this.side * this.sidelength;
         console.log("the perimeter of "+this.pname+" is "+p);
    
    }
}
var square=new shape("square",4,6)
square.calcPerimeter();
var triangle=new shape("Triangle",3,6)
triangle.calcPerimeter();