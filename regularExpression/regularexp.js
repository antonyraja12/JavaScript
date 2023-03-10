function check(){
  var c=document.getElementById("name1").value;
  var  ptn= new RegExp(/^[A-Za-z0-9_]{3,15}$/);
  
  if(ptn.test(c))
  {
    const as='Your Pattern matched';
    (document.getElementById('pat').innerHTML = as);
  
  }
  else {
    document.getElementById('pat').innerHTML = 'pattern not matched';
  
  }
}