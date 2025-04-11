const prompt = require('prompt-sync')();
// modelos atributos e funcoes para criacao de un objeto
class Cliente{

    #nome; //atirbuto
    idade;
    cpf;
    agencia;

    getDescricao(){
        return "nome;"+this.#nome+",idade"+this.idade

    }//obtem nome

   //obter dados
    getNome(){
        
        return this.#nome;
     }//prencha nome
    setNome(value){
        this.#nome = value;

    }
} 
//objeto que possui as informaçoes da classe de forma individual
let cliente = new Cliente();
// cliente.setNome("teste")
cliente.setNome (prompt("digite o nome do cliente: "));
cliente.idade = 17;
cliente.cpf = "130.970.489-95";
cliente.agencia = 101010;

console.log(cliente);
console.log(cliente.getNome());
console.log(cliente.getDescricao())