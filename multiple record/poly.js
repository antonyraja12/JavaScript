class a{
    display()
    {
        console.log("A is invoked");
    }
}
class b extends a{
    display(){ 
    console.log("B is invoked");
            }
}
var c=new b();
c.display();
