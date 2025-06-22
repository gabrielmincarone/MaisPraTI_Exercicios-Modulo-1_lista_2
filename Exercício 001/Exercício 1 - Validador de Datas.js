// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.

const prompt = require('prompt-sync') ()                                                                                                    // Importa o módulo prompt-sync e inicializa a sua função, permitindo a entrada de dados pelo usuário no terminal.

prompt('Bem-vindo ao Validador de Datas, digite qualquer telha para iniciar!')                                                              // Mensagem de boas-vindas ao usuário. 

while(true) {                                                                                                                               // Inicia um loop while que será encerrado apenas quando o usuário digitar sair ao final da conferência.

let dia = Number(prompt('Informe o número do dia (entre 1 e 31): '))                                                                        // Declara, inicializa e armazena na variável 'dia' que será validada posteriormente.
let mes = Number(prompt('Informe o número do mês (entre 1 e 12): '))                                                                        // Declara e inicializa a variável 'mes' que será validada posteriormente.
let ano = Number(prompt('Informe um ano válido: '))                                                                                         // Declara e inicializa a variável 'ano' que será validada posteriormente.


function ehDataValida(dia, mes, ano) {                                                                                                      // Inicializa a função 'ehDataValida' que recebe os valores armazenados em 'dia', 'mes' e 'ano' para verificar se formam uma data válida.
    if(ano < 1) return false                                                                                                                // Verifica se o valor armazenado em 'ano' é menor que zero, se for, retorna false.

    if(mes < 1 && mes > 12) return false                                                                                                    // Verifica se o valor armazenado em 'mes' não está entre 1 e 12, se estiver, retorna false.

    if(mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {                                         // Verifica se o valor armazenado em 'mes' é referente a algum dos meses que possui 31 dias (1, 3, 5, 7, 8, 10 ou 12).
        return dia >= 1 && dia <= 31 ? true : false                                                                                         // Verifica se o valor armazenado na variável 'dia' está entre 1 e 31 returnando true se estiver e false se não estiver.
    } else if(mes === 4 || mes === 6 || mes === 9 || mes === 11) {                                                                          // Verifica se o valor armazenado em 'mes' é referente a algum dos meses que possui 30 dias (4, 6, 9 ou 11).
        return dia >= 1 && dia <= 30 ? true : false                                                                                         // Verifica se o valor armazenado na variável 'dia' está entre 1 e 30 returnando true se estiver e false se não estiver.
    } else if(mes === 2) {                                                                                                                  // Verifica se o valor armazenado em 'mes' é referente a fevereiro (2) para verificar se o ano é bissexto.
        if(ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {                                                                           // Verifica se o valor armazenado em 'ano' é um ano bissexto.
            return dia >= 1 && dia <= 29 ? true : false                                                                                     // Sendo bissexto, verifica se o valor armazenado em 'dia' está entre 1 e 29 returnando true se estiver e false se não estiver.
        } else {
            return dia >= 1 && dia <= 28 ? true : false                                                                                     // Sendo ano comum, verifica se o valor armazenado em 'dia' está entre 1 e 28 returnando true se estiver e false se não estiver.
        }
    }

    return false                                                                                                                            // Retorna false se algum dos verificações anteriores náo forem true.
}

console.log(ehDataValida(dia, mes, ano))                                                                                                    // Exibe no terminal se a data é true ou false para atender aos requisitos do exercício.
console.log(ehDataValida(dia, mes, ano) ? `A data ${dia}/${mes}/${ano} é válida.` : `A data ${dia}/${mes}/${ano} NÃO é válida!`)            // Exibe no terminal uma mensagem amigável ao usuário informando se com os valores armazenados em 'dia', 'mes' e 'ano' formam uma data.


let restart_system = prompt('Para verificar uma nova data tecle ENTER ou digite SAIR para encerrar o Validador de Datas: ')                 // Exibe no terminal uma mensagem ao usuário perguntando se ele quer verificar uma nova data ou encerrar o sistema.

if(restart_system != 'sair' && restart_system != 'SAIR') {                                                                                  // Verifica se o valor digitado é diferente de 'sair' ou 'SAIR' para reiniciar o loop 'while' e realizar uma nova conferência.
    console.log('\nCerto, vamos iniciar uma nova verificação.')                                                                             // Sendo diferente, exibe no terminal uma mensagem de reinício da conferência.
    continue                                                                                                                                // Reinicia o loop while.
    } else {                                                                                                                                // Sendo o valor armazenado em 'restart_system' igual a 'sair' ou 'SAIR'.
        console.log('Obrigado por utilizar o Validador de Datas.\nAté mais!')                                                               // Exibe no terminal a mensagem de despedida
        setTimeout(() => {                                                                                                                  // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                                                      // Encerra o processo o processo e finaliza o programa
        }, 3000)                                                                                                                            // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
        }
    break                                                                                                                                   // Encerra o loop 'while' e finaliza o programa

}
