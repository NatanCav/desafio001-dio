class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        if(this.tipo === "guerreiro"){
        console.log(`"o ${this.tipo} atacou usando espada";`)
        
        } else if(this.tipo === "mago"){
        console.log(`"o ${this.tipo} atacou usando magia";`)
        
        } else if(this.tipo === "monge"){
        console.log(`"o ${this.tipo} atacou usando artes marciais";`)
        
        } else if(this.tipo === "ninja"){
        console.log(`"o ${this.tipo} atacou usando shuriken";`)
        
        }
    }
}

let heroi1 = new heroi("Rei Arthur", 25, "guerreiro");
let heroi2 = new heroi("Hanzo Hasashi", 36, "ninja");

console.log(heroi1);
heroi1.atacar();

console.log(heroi2);
heroi2.atacar();