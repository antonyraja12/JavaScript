function class1 (){
    class person{
        constructor(name1,year){
        this.name=name1;
        this.age=year;
        }
        describe(){
            let dt=new Date()
            return date.get.FullYear()-this.year;
        }
    }
    let a=new person("Antony",2001);
    document.getElementById("cls").innerHTML=a.describe()+"years old";
}