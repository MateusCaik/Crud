import { cv, consulta, consId, atualizar, excluir } from './funções.js';
import readlineSync from 'readline-sync';
export var clientes = []; 

opcao();

export function opcao(){
var opcao = parseInt(readlineSync.question(`Opcao: 
    1- Cliente novo
    2- Lista de Clientes
    3- Consultar cliente por id
    4- Atualizar dados 
    5- Excluir
    6- Sair
`))

switch(opcao){
    case 1: cv();
        break;
    case 2: consulta();
        break;    
    case 3: consId();
        break;
    case 4: atualizar();
        break;
    case 5: excluir();
        break;
    case 6: 
        break;
}
}
