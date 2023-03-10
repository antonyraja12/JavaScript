
const emp={
    f_name:"Raja",

}
Object.defineProperty(emp,"getname",{
    get : () => {
        return this.f_name;
    }
});
Object.defineProperty(emp,"setname",{
    set : (value)=>{
        this.f_name=value;
    }
});
console.log(emp.f_name);
emp.setname="Antony";
console.log(emp.getname);