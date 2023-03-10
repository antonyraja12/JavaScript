function mark()
{
        var a1;
    var a=(document.getElementById("name1").value);
    var b=(document.getElementById("roll1").value);
    var m1=parseInt(document.getElementById("mark1").value);
    var m2=parseInt(document.getElementById("mark2").value);
    var m3=parseInt(document.getElementById("mark3").value);
    document.getElementById("name11").value=a;
    document.getElementById("roll11").value=b;
    document.getElementById("mark11").value=m1;
    document.getElementById("mark22").value=m2;
    document.getElementById("mark33").value=m3;
    var tot=m1+m2+m3;
    document.getElementById("total").value=tot;
    var av=tot/3;
    document.getElementById("avg").value=av;
    if (av<35)
     {
        var f="Fail";
        document.getElementById("res").value=f;

     }
     else{
        var p="Pass";
        document.getElementById("res").value=p;
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
              document.getElementById("grade").value="Distinction";
              
              break;
            case 2:
              document.getElementById("grade").value="First Class";
              break;
            case 3:
                document.getElementById("grade").value="Second Class";
                break;
            case 4:
                document.getElementById("grade").value="Third class";
                break;
            default:
                document.getElementById("grade").value="Fail";

        }
}
