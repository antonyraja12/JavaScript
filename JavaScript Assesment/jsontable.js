
function c(){
    
var ename=document.getElementById("ename").value;
var eid=document.getElementById("Eno").value;
var desg=document.getElementById("des").value;
var phone=document.getElementById("ph").value;
var sal=parseFloat(document.getElementById("basic").value);
    var a=(sal*15/100);
    document.getElementById("hra").value=a;
    var b=(sal*15/100);
    document.getElementById("da").value=b;
    var c=(sal*3/100);
    document.getElementById("pf").value=c;
    var d=(sal+a+b);
    document.getElementById("gs").value=d;
    var e=(d-c);
    document.getElementById("nt").value=e;
    
}

function disp() {
        var row = mytable.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        cell1.innerHTML = ename;
        cell2.innerHTML = eid;
        cell3.innerHTML = desg;
        cell4.innerHTML = phone;
        cell5.innerHTML = sal;
        cell6.innerHTML = a;
        cell7.innerHTML = b;
        cell8.innerHTML = c;
        cell9.innerHTML = d;
        cell10.innerHTML = e;
    }

    

function nvalid(){
    var na=document.getElementById("ename").value;
    var ptn=(/^[A-Za-z]{3,25}$/)
    if(na.match(ptn)){
        document.getElementById("span1").innerHTML="pattern matched";
    }
    else{
        document.getElementById("span1").innerHTML="input must be A-z and in legth of 3-25";
    }
}
