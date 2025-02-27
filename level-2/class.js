class Animal{//class created
    constructor(name,legCount,speaks,clr,feat){//constrcutor initialises the obj prop
        //name... all this are oject behaviour
        this.name=name;
        this.legCount=legCount;
        this.speaks=speaks;
        this.clr=clr;
        this.feat=feat;//this is used to refer the current oject that is called
    }
    static 
    speak(){
        console.log("hello "+this.speaks);
    }
    color(){
        console.log(this.name + " is " + this.clr)
    }
    featt(){
        console.log(this.name + " is " + this.feat)
    }
}
let dog=new Animal("Dog",4,"bhow bhow","black","fat")
let cat=new Animal("Cat",4,"meow","white","medium")
dog.speak();
cat.speak()
dog.color();cat.color();
dog.featt();cat.featt();