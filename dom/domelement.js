function domelement(){
        var div1=document.createElement("div");
        var txt=document.createTextNode("Login Page");
        var inp=document.createElement("input");
        var but=document.createElement("button") 
        var txt1=document.createTextNode("Click");
        var a=  but.appendChild(txt1);
        var b= div1.appendChild(txt);
        var c=div1.appendChild(inp);
        var d=div1.appendChild(but);
        document.body.appendChild(div1);
    }
