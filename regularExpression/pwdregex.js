var a= ()=>{
   var b= document.getElementById("uname").value;
   var c=document.getElementById("pwd").value;
   var ptn=new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#_]).{8,15}$/)
   if (c.match(ptn)){
   var span= document.getElementById("spn");
   span.innerHTML="pattern matched";
   span.style.color="green";
   }
   
   else{
    var span= document.getElementById("spn");
    span.innerHTML="pattern not matched";
    span.style.color="Red";
   }
}