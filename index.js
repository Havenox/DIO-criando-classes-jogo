class hero{
    constructor(name,age,type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attackKind(){
        switch(this.type){
            case "mago" :
                return "magia";

            case "guerreiro":
                return "espada";

            case "monge":
                return "artes marciais";

            case "ninja":
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