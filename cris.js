const prompt = require('prompt-sync')();
// modelos atributos e funcoes para criacao de un objeto
class Cliente{

    nome; //atirbuto
    idade;
    cpf;
    agencia;
} 
//objeto que possui as informaçoes da classe de forma individual
let cliente = new Cliente();

cliente.nome = prompt("digite o nome do cliente: ");
cliente.idade = 17;
cliente.cpf = "130.970.489-95";
cliente.agencia = 101010;

console.log(cliente);