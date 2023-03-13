class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    

    }
    presonal_det(){
        console.log("Hi My self "+this.name+" and "+this.age+"years old")
}
    }

class teacher extends Person{
     constructor(name,age,designation){
        super(name,age)
        this.designation=designation;
        }



        professional_det(){ 
        
            console.log("am working as a "+this.designation);
        }
}
var fetch=new teacher("Antony",22,"FullStack Devloper");
fetch.presonal_det();
fetch.professional_det();