
var a1;
var c;
function fun(){
    
    var a=document.getElementById("num").value;
    var b='<option>select</option>';
    
    for (var i=1;i<=a;i++)
    {  
        b+='<option value'+ i +'>'+i+'<option>';
    }
     select1.innerHTML=b;
     
    }
   
    function fun1(){ 
    var a1=document.getElementById("select1").value;
     for (var j=1;j<=a1;j++)
     {  
       c+='<option>'+j+'<option>';
     }
     select2.innerHTML=c;
    }   