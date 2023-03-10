var data =[
    {
        "F_name":"Antony",
        "L_name":"Raja",
        "Age":23
    },
    {
        "F_name":"Sethu",
        "L_name":"Raj",
        "Age":23
    }
]


// function display(){
//     alert("hello");
//     var a='';
//     data.map((value,index)=>{
//         a+='<li>'+value.F_name+'<li>';
//     })
//     document.getElementById("list").innerHTML=a;
// }
async function display(){
    var response=await fetch("https://fakestoreapi.com/products");
    var datas=await response.json();
    console.log(datas);
    var a="";
    datas.map((value,index)=>{
        a+='<h3>'+value.id+'</h3>';
     })
    document.getElementById("list").innerHTML=a;
}