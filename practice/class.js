class emp{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    detail(){
        console.log(this.id+""+this.name);
    }
    }
    var a1=new emp(101,'Antony');
    var a2=new emp(102,'Raja');
    a1.detail;
    a2.detail;
