class Vec {
    constructor(VName) {
        this.vechicleN = VName;
        throw new error("you cannot create an instance of abstract class");
    }
    display() {
        return this.vechicleN;
    }
}
var Vech=new Vec();
