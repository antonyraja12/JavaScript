function map1(){
person =[{
    firstname:"Antony Raja",
    Lastname:"A",
    emailID:"antonyrj@gmail.com",
    ph_no:6379031063,
    password:121212,
    address1:{
        "state":"Tamilnadu",
        "city":"Dindigul",
        "pincode":624304,
        country:"India"
    },
    address2:{
        state:"Tamilnadu",
        city:"Coimbatore",
        pincode:301247,
        country:"india"
         }
}]
    
    var a="<table><tr><th>first_name</th><th>Last_name</th><th>emailID</th><th>phone no</th><th>Password</th><th>state</th><th>city</th><th>contry</th></tr></table>";
    person.map((value,index) =>{
    a+='<table><tr><td>'+value.firstname+' '+value.Lastname+'  '+value.emailID+'   '+value.ph_no+'   '+value.password+'   '+value.address1["state"]+'   '+value.address1["city"]+'   '+value.address1.country+'</td></tr></table>';
    a+='<table><tr><td>'+value.firstname+' '+value.Lastname+'  '+value.emailID+'   '+value.ph_no+'   '+value.password+'   '+value.address2["state"]+'   '+value.address2["city"]+'  '+value.address1.country+'</td></tr></table>';
    document.getElementById("ans").innerHTML=a;
});
}
map1();