function mark()
{
    var r,gr,a1;
    var a=(document.getElementById("name1").value);
    var b=(document.getElementById("roll1").value);
    var m1=parseInt(document.getElementById("mark1").value);
    var m2=parseInt(document.getElementById("mark2").value);
    var m3=parseInt(document.getElementById("mark3").value);
    var table=(document.getElementById("mytable"));
    var tot=m1+m2+m3;
    var av=tot/3;
    document.getElementById("cls").style.backgroundImage = "linear-gradient(to right ,#4287f5,#dd42f5)";
    document.getElementById("cls").style.color="white";
    document.getElementById("name1").style.color="white";
    document.getElementById("roll1").style.color="white";
    document.getElementById("mark1").style.color="white";
    document.getElementById("mark2").style.color="white";
    document.getElementById("mark3").style.color="white";
       
    if (av<35)
     {
        var r="Fail";
    
     }
     else{
        var r="Pass";
    
     }
     if(av>=80 && av<=100)
     {
        a1=1;
    }
    else if (av>=65 && av<80) {
        a1=2;
        
    } 
    else if (av>=50 && av<65) {
        a1=3;
    }
    else if (av>=35&&av<50){
        a1=4;
    }
    else {
        a1=5;
        
    }
        switch(a1){
            case 1:
            gr= "Distinction";
              
              break;
            case 2:
             gr="First Class";
              break;
            case 3:
              gr="Second Class";
                break;
            case 4:
               gr="Third class";
                break;
            default:
              gr="Fail";

        }
    

        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);

        cell1.innerHTML = a;
        cell2.innerHTML = b;
        cell3.innerHTML = m1;
        cell4.innerHTML = m2;
        cell5.innerHTML = m3;
        cell6.innerHTML = tot;      
        cell7.innerHTML = av;        
        cell8.innerHTML = r;
        cell9.innerHTML = gr;
    }
