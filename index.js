class hero{
    constructor(name,age,type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attackKind(){
        switch(true){
            case this.type == "mago" :
            return "magia";

            case this.type == "guerreiro":
            return "espada";

            case this.type == "monge":
            return "artes marciais";

            case this.type == "ninja":
            return "shuriken";
        }
    }

    attack(){
        console.log(`O ${this.type} ${this.name} atacou usando ${this.attackKind()}`)
    }
}

const havenox = new hero("Havenox", 34, "guerreiro");
const salluth = new hero("Salluth", 22 , "monge");
const sonofnight = new hero("Sonofnight", 38 , "mago");
const estefao = new hero("Teths", 38, "ninja");


havenox.attack();
sonofnight.attack();
salluth.attack();
estefao.attack();