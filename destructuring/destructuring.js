function fun1(){
    let a={
        First_name:"Antony",
        Last_name:"raja",
        mark1:95,
        mark2:98,
        mark3:86,
        mark4:90,
        personal_dete:{
            place:"Dindigul",
            DOB:"11-03-2001",
            Gender:"Male"
        },
         as : ()=> {
            return(First_name,Last_name,mark1,mark2,mark3,mark4,personal_dete);
         }
    }
    
    console.log(a.First_name);
    console.log(a ["Last_name"]);
    console.log(a ["mark1"]);
    console.log(a ["mark2"]);
    console.log(a.mark3);
    console.log(a.mark4);
    console.log(a.personal_dete.place);
    console.log(a["personal_dete"]["DOB"]);
}
fun1();
     
    
 
