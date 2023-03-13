async function show(){
    var response=await fetch ("https://fakestoreapi.com/products");
    var view= await response.json()
    console.log(view);
    var div1='';
    view.map((value,index)=>{
    
        div1+='<div>'+'<img src= '+value.image +' height="200px" width="200px">'+value.id+" "+value.title+"    "+value.price+"   "+value.descritption+"  "+" "+value.category+"  "+value.rating.rate+"  "+value.rating.count+'</div>';

    })          
    document.getElementById("cont1").innerHTML=div1;

}

