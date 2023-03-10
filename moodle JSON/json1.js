
function gen(){
var c=document.getElementById("lname").value;
var a =document.getElementById("name1").value;
var first=a.slice(0,4);
var b=document.getElementById("dob").value;
var s=new Date(b);
var d =s.getDate();
var con=first+d;
var p= document.getElementById("ans").value=con;
    const det=[{
        "name":a,
        "Last":c,
        "DOB":b,
        "password":p
    }];
    const str=JSON.stringify(det);
    for(list in det)
    {
        console.log(det);
    }
}