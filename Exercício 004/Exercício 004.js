// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1.

const prompt = require('prompt-sync')()                                                                                         // Importa o módulo prompt-sync e inicializa a sua função, permitindo a entrada de dados pelo usuário no terminal.

while(true) {                                                                                                                   // Inicia um loop while infinito que é finalizado quando o usuãrio decide sair da calculadora de fatorial.

let n = Number(prompt('Digite um número inteiro maior que zero para verificar o seu fatorial: '))                               // Declara, inicia e armazena a variável 'n' solicitando ao usuário um valor para a variável.

if(!Number.isInteger(n)) {                                                                                                      // Verifica se o valor armazenado em 'n' não é um número inteiro.
    console.log(`Arredondamos seu número para ${Math.round(n)} pois você não digitou um número inteiro!`)                       // Exibe no terminal uma mensagem ao usuário informando que o número que ele digitou foi arredondado pois ele n"ao digitou um número inteiro. 
    n = Math.round(n)                                                                                                           // Atualiza o valor armazenado na variável 'n' utilizando o método 'round' que arredonda para o número inteiro mais próximo.
}

function fatorial(n) {                                                                                                          // Inicia uma função para verificar o fatorial do valor armazenado em 'n'.
    if(n < 0) throw new Error('Valor inválido: São permitidos apenas valores positivos')                                        // Verifica se o valor armazenado em 'n' é menor que 0 (zero), sendo, exibe uma mensagem de erro e encerra o programa.
    if(n === 0) return 1                                                                                                        // Verifica se o valor armazenado em 'n' é 0 (zero), sendo, retorna que o fatorial é 1.
    if(n > 0) return n * fatorial(n-1)                                                                                          // Verifica se o valor armazenado em 'n' é maior que 0 (zero), sendo, de forma recursiva executa o cálculo até que chegue em 0 (caso base).
}

console.log(`O fatorial de ${n} é: ${fatorial(n)}`)                                                                             // Exibe no terminal a mensagem informando o fatorial do valor armazenado em 'n'

let restart_fatorial = prompt('Para consultar um novo fatorial tecle ENTER ou digite SAIR para encerrar sua consulta: ')        // Exibe no terminal uma mensagem ao usuário perguntando se ele quer verificar uma nova data ou encerrar o sistema.

if(restart_fatorial != 'sair' && restart_fatorial != 'SAIR') {                                                                  // Verifica se o valor digitado é diferente de 'sair' ou 'SAIR' para reiniciar o loop 'while' e realizar uma nova conferência.
    console.log('\nCerto, vamos realizar um novo cálculo fatorial.')                                                            // Sendo diferente, exibe no terminal uma mensagem de reinício da conferência.
    continue                                                                                                                    // Reinicia o loop while.
    } else {                                                                                                                    // Sendo o valor armazenado em 'restart_system' igual a 'sair' ou 'SAIR'.
        console.log('Obrigado por utilizar nosso serviço!\nAté mais!')                                                          // Exibe no terminal a mensagem de despedida
        setTimeout(() => {                                                                                                      // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                                          // Encerra o processo o processo e finaliza o programa
        }, 3000)                                                                                                                // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
        }
    
    break                                                                                                                       // Encerra o loop 'while' e finaliza o programa

}