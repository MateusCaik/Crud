import readlineSync from 'readline-sync';
import { clientes } from './krud.js';
import { opcao } from './krud.js';


export function cv(){

    let cliente = {
        id: clientes.length + 1,
        nome: readlineSync.question("Digite o nome do cliente: "),
        email: readlineSync.question("Digite o email do cliente: ")
    }

    clientes.push(cliente)
        console.clear();
    console.log("Cliente adicionado com sucesso!\n")

opcao();

}

export function consulta(){

        console.clear();

    console.table(clientes);

opcao();
}

export function consId(){

    var id = parseInt(readlineSync.question("Digite o id do cliente para excluir: "));
    let foundClient = clientes.findIndex(clientes => clientes.id === id);
    
console.table(clientes[foundClient]);

opcao();

}

export function atualizar(){

    var id = parseInt(readlineSync.question("Digite o id do cliente: "));
        console.clear();

    let indexToAtt = clientes.findIndex(clientes => clientes.id === id);
    var nomee = readlineSync.question("Digite o novo nome do cliente: ");
        clientes[indexToAtt].nome = nomee;
    var emaill = readlineSync.question("Digite o novo email do cliente: ");
        clientes[indexToAtt].email = emaill;

opcao();


}

export function excluir(){

    var ctExcluir = parseInt(readlineSync.question("Digite o id do cliente para excluir: "));
    let foundClient = clientes.findIndex(clientes => clientes.id === ctExcluir);

        if (foundClient !== -1) {
            clientes.splice(foundClient, 1);
  }

  clientes.forEach((excluido, índice) => {
    excluido.id = índice + 1;
});

        console.clear();
    console.log("Cliente excluido com sucesso!\n")

opcao();

}

