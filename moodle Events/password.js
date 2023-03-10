function gen(){
   var a =document.getElementById("name1").value;
   var first=a.slice(0,4);
   var b=document.getElementById("dob").value;
   var s=new Date(b);
   var d =s.getDate();
   var con=first+d;
   document.getElementById("ans").value=con;
}