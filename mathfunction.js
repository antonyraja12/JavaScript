function add(){
    var a=parseInt(document.getElementById("f1").value);
    var b=parseInt(document.getElementById("f2").value);
    var c=a+b;
    document.getElementById("ans").innerHTML="Addition"+c;
    document.getElementById("ans").style.color="green";
}
function sub(){
    var a=parseInt(document.getElementById("f1").value);
    var b=parseInt(document.getElementById("f2").value);
    var c=a-b;
    document.getElementById("ans").innerHTML="Subtraction: "+c;
    document.getElementById("ans").style.color="blue";
  
}
function mul(){
    var a=parseInt(document.getElementById("f1").value);
    var b=parseInt(document.getElementById("f2").value);
    var c=a*b;
    document.getElementById("ans").innerHTML="Multiplication: "+c;
    document.getElementById("ans").style.color="red";
    
}
function div(){
    var a=parseInt(document.getElementById("f1").value);
    var b=parseInt(document.getElementById("f2").value);
    var c=a/b;
    document.getElementById("ans").innerHTML="Division: "+c;
    document.getElementById("ans").style.color="orange";
}