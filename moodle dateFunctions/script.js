 function fun(m,y){
    var mname=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var a=new Date(y,m-1);
    var s=a.getMonth();
    var arr= mname[s];
    console.log(arr);
    console.log(y);
}
fun(5,2002);
fun(12,1973);