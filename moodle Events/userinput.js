var a1;

function fun(){
    
    var a=document.getElementById("num").value;
    var b='<option>select</option>';
    
    for (var i=1;i<=a;i++)
    {   
        b+='<option value='+ i +'>'+i+'<option>';
    }
     select1.innerHTML=b;
     }
   
    function fun1(){ 
    var a1=document.getElementById("select1").value;
     var u='';
     
     for (var j=1;j<=a1;j++)
     {  
             u+='<label>User Name</label><input type=text placeholder="enter your name"></input> <br>';
             u+='<label>Password</label><input type=password placeholder="password"></input> <br> <br>';
     }
     inp.innerHTML=u;
     inp.innerHTML=u;
    }  