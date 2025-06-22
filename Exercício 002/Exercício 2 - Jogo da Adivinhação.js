// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar.
// Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')()                                                                                                                                 // Importa o módulo prompt-sync e inicializa a sua função, permitindo a entrada de dados pelo usuário no terminal.

console.log('Bem-vindo ao JOGO DE ADIVINHAÇÃO!')                                                                                                                        // Exibe no terminal a mensagem de boas vindas do jogo.
console.log('\nEste é um jogo muito simples, onde você precisa acertar o número aleatório que o jogo irá gerar entre 1 e 100.')                                         // Exibe no terminal a explicação de como jogar o Jogo de Adivinhação.
console.log('\nMas como somos muito legais, a cada rodada vamos te dar dicas.')                                                                                         // Exibe no terminal a explicação de como funcionam as dicas que o jogo dá ao jogador.

prompt('\nPronto? Digite enter para iniciarmos a brincadeira =)')                                                                                                       // Exibe no terminal a pergunta ao jogador se ele está pronto para iniciar o jogo apertando ENTER para iniciar.

while(true) {                                                                                                                                                           // Inicia um loop while infinito que é finalizado quando o jogador decide sair do jogo.

let guessNumber = Math.trunc((Math.random()*100))                                                                                                                       // Declara e inicializa a variável 'guessNumber' que irá armazenar o o número randomico gerado de 1 a 100.
//console.log(guessNumber)

let contador = 0                                                                                                                                                        // Declara e inicia a variável 'contador' com o valor 0 (zero) .

let userGuess = Number(prompt('Digite um número para tentar acertar! '))                                                                                                // Declara, inicia e armazena na variável 'userGuess' o valor digitado pelo jogador.

while(true) {                                                                                                                                                           // Inicia um loop while infinito que será encerrado quando o jogador as variáveis 'userGuess' e 'guessNumber' forem iguais. 

        contador ++                                                                                                                                                     // Contabiliza +1 na variável 'contador' a cada volta do loop while.

    if(guessNumber === userGuess) {                                                                                                                                     // Verifica se 'userGuess' e 'guessNumber' armazenam o mesmo valor. 
        console.log(`\n${userGuess} é o número! o/`)                                                                                                                    // Exibe no terminal o valor armazenado em 'userGuess' e informa que o jogador acertou o número.
        break                                                                                                                                                           // Encerra o loop while pois os valores armazendos em 'userGuess' e 'guessNumber' são iguais.

    } else if(userGuess < 1 || userGuess > 100) {                                                                                                                       // Verifica se o valor armazenado em 'userGuess' é menor que 1 ou maior que 100.
        userGuess = Number(prompt('Mirou na Lua e acertou Saturno rsrsrs... Só valem números entre 1 e 100!!! Digite um número para tentar acertar! '))                 // Exibe no terminal a mensagem de que o número digitado é inválido.

    } else if(guessNumber < userGuess) {                                                                                                                                // Inicia um bloco de verificações quando o valor armazenado em 'guessNumber' é menor que o armazenado em 'userGuess'
        if((userGuess - guessNumber) >= 80) {                                                                                                                           // Verifica se a diferença entre 'userGuess' e 'guessNumber' é maior que 80.
            userGuess = Number(prompt(`${userGuess} está muuuuito longe mesmo. Digite um número bem mais baixo: `))                                                     // Exibe no terminal uma mensagem informando que o valor armazenado em 'guessNumber' é mais baixo.
            continue                                                                                                                                                    // Reinicia o loop while para solicitar um novo valor para 'userGuess'.
        } else if((userGuess - guessNumber) >= 40) {                                                                                                                    // Verifica se a diferença entre 'userGuess' e 'guessNumber' é maior que 40.
            userGuess = Number(prompt(`${userGuess} está muuuuito longe. Digite um número bem mais baixo: `))                                                           // Exibe no terminal uma mensagem informando que o valor armazenado em 'guessNumber' é mais baixo.
            continue                                                                                                                                                    // Reinicia o loop while para solicitar um novo valor para 'userGuess'.
        } else if ((userGuess - guessNumber) >= 20) {                                                                                                                   // Verifica se a diferença entre 'userGuess' e 'guessNumber' é maior que 20.
            userGuess = Number(prompt(`${userGuess} está longe. Digite um número mais baixo: `))                                                                        // Exibe no terminal uma mensagem informando que o valor armazenado em 'guessNumber' é mais baixo.
            continue                                                                                                                                                    // Reinicia o loop while para solicitar um novo valor para 'userGuess'.
        } else if((userGuess - guessNumber) >= 10) {                                                                                                                    // Verifica se a diferença entre 'userGuess' e 'guessNumber' é maior que 10.
            userGuess = Number(prompt(`${userGuess} está no caminho. Digite um número mais baixo: `))                                                                   // Exibe no terminal uma mensagem informando que o valor armazenado em 'guessNumber' é mais baixo.
            continue                                                                                                                                                    // Reinicia o loop while para solicitar um novo valor para 'userGuess'.
        } else if((userGuess - guessNumber) > 5) {                                                                                                                      // Verifica se a diferença entre 'userGuess' e 'guessNumber' é maior que 5.
            userGuess = Number(prompt(`${userGuess} está perto. Digite um numero um pouco mais baixo: `))                                                               // Exibe no terminal uma mensagem informando que o valor armazenado em 'guessNumber' é mais baixo.
            continue                                                                                                                                                    // Reinicia o loop while para solicitar um novo valor para 'userGuess'.
        } else if((userGuess - guessNumber) > 1) {                                                                                                                      // Verifica se a diferença entre 'userGuess' e 'guessNumber' é maior que 1.
            userGuess = Number(prompt(`${userGuess} está muito perto. Digite um numero um pouquinho mais baixo: `))                                                     // Exibe no terminal uma mensagem informando que o valor armazenado em 'guessNumber' é mais baixo.
            continue                                                                                                                                                    // Reinicia o loop while para solicitar um novo valor para 'userGuess'.
        } else if((userGuess - guessNumber) === 1) {                                                                                                                    // Verifica se a diferença entre 'userGuess' e 'guessNumber' é igual a 1.
            userGuess = Number(prompt(`${userGuess} deu na trave, inacreditável! Digite um numero um pouquinho mais baixo: `))                                          // Exibe no terminal uma mensagem informando que o valor armazenado em 'guessNumber' é mais baixo.
            continue                                                                                                                                                    // Reinicia o loop while para solicitar um novo valor para 'userGuess'.
        }
           
    } else if(guessNumber > userGuess) {                                                                                                                                // Inicia um bloco de verificações quando o valor armazenado em 'UserGuess' é menor que o armazenado em 'guessNumber'.
        if((guessNumber - userGuess) >= 80) {                                                                                                                           // Verifica se a diferença entre 'guessNumber' e 'userGuess' é maior que 80.
            userGuess = Number(prompt(`${userGuess} está muuuuito longe mesmo. Digite um número bem mais alto: `))                                                      // Exibe no terminal uma mensagem informando que o valor armazenado em 'guessNumber' é mais alto.
            continue                                                                                                                                                    // Reinicia o loop while para solicitar um novo valor para 'userGuess'.
        } else if((guessNumber - userGuess) >= 40) {                                                                                                                    // Verifica se a diferença entre 'guessNumber' e 'userGuess' é maior que 40.
            userGuess = Number(prompt(`${userGuess} está muuuuito longe. Digite um número bem mais alto: `))                                                            // Exibe no terminal uma mensagem informando que o valor armazenado em 'guessNumber' é mais alto.
            continue                                                                                                                                                    // Reinicia o loop while para solicitar um novo valor para 'userGuess'.
        } else if ((guessNumber - userGuess) >= 20) {                                                                                                                   // Verifica se a diferença entre 'guessNumber' e 'userGuess' é maior que 20.
            userGuess = Number(prompt(`${userGuess} está longe. Digite um número mais alto: `))                                                                         // Exibe no terminal uma mensagem informando que o valor armazenado em 'guessNumber' é mais alto.
            continue                                                                                                                                                    // Reinicia o loop while para solicitar um novo valor para 'userGuess'.
        } else if((guessNumber - userGuess) >= 10) {                                                                                                                    // Verifica se a diferença entre 'guessNumber' e 'userGuess' é maior que 10.
            userGuess = Number(prompt(`${userGuess} está no caminho. Digite um número mais alto: `))                                                                    // Exibe no terminal uma mensagem informando que o valor armazenado em 'guessNumber' é mais alto.
            continue                                                                                                                                                    // Reinicia o loop while para solicitar um novo valor para 'userGuess'.
        } else if((guessNumber - userGuess) > 5) {                                                                                                                      // Verifica se a diferença entre 'guessNumber' e 'userGuess' é maior que 5.
            userGuess = Number(prompt(`${userGuess} está perto. Digite um numero um pouco mais alto: `))                                                                // Exibe no terminal uma mensagem informando que o valor armazenado em 'guessNumber' é mais alto.
            continue                                                                                                                                                    // Reinicia o loop while para solicitar um novo valor para 'userGuess'.
        } else if((guessNumber - userGuess) > 1) {                                                                                                                      // Verifica se a diferença entre 'guessNumber' e 'userGuess' é maior que 1.
            userGuess = Number(prompt(`${userGuess} está muito perto. Digite um numero um pouquinho mais alto: `))                                                      // Exibe no terminal uma mensagem informando que o valor armazenado em 'guessNumber' é mais alto.
            continue                                                                                                                                                    // Reinicia o loop while para solicitar um novo valor para 'userGuess'.
        } else if((guessNumber - userGuess) === 1) {                                                                                                                    // Verifica se a diferença entre 'guessNumber' e 'userGuess' é igual a 1.
            userGuess = Number(prompt(`${userGuess} deu na trave, inacreditável! Digite um numero um pouquinho mais alto: `))                                           // Exibe no terminal uma mensagem informando que o valor armazenado em 'guessNumber' é mais alto.
            continue                                                                                                                                                    // Reinicia o loop while para solicitar um novo valor para 'userGuess'.
        }
    }                                                                                                                                                                   
}                                                                                                                                                                       // Encerra o bloco de código do loop while que verifica se as variáveis 'userGuess' e 'guessNumber' contêm o mesmo valor

if(contador === 1) {                                                                                                                                                    // Verifica se o valor armazenado em 'contador' é igual a 1.
    console.log('Você hackeou o jogo, não há outra explicação para ter acertado de primeira!\n')                                                                        // Exibe no terminal uma mensagem dando um feedback ao jogador sobre a sua performance.
} else if(contador < 5) {                                                                                                                                               // Verifica se o valor armazenado em 'contador' é menor que 5.
    console.log(`Você acertou na ${contador}º vez. Já pensou em jogar na mega hoje? rsrs\n`)                                                                            // Exibe no terminal uma mensagem dando um feedback ao jogador sobre a sua performance.
} else if(contador < 10) {                                                                                                                                              // Verifica se o valor armazenado em 'contador' é menor que 10.
    console.log(`Você foi muito bem!!! Acertou na ${contador}º vez.\n`)                                                                                                 // Exibe no terminal uma mensagem dando um feedback ao jogador sobre a sua performance.
} else if(contador < 20) {                                                                                                                                              // Verifica se o valor armazenado em 'contador' é menor que 20.  
    console.log(`Não vamos te mentir, passaram pessoas melhores que você por aqui hoje rsrs...  Você precisou de ${contador} chances para acertar.\n`)                  // Exibe no terminal uma mensagem dando um feedback ao jogador sobre a sua performance.
} else {                                                                                                                                                                // Verifica se o valor armazenado em 'contador' é maior que 20.
    console.log(`Honestamente? rsrsrs...  Você não nasceu pra isso ='( \nVocê levou ${contador} rodadas para acertar.\n`)                                               // Exibe no terminal uma mensagem dando um feedback ao jogador sobre a sua performance.
}

let restart_game = prompt('Para jogar novamente tecle ENTER ou digite SAIR para encerrar o Jogo de Adivinhação: ')                                                      // Exibe no terminal uma mensagem ao usuário perguntando se ele quer verificar uma nova data ou encerrar o sistema.

if(restart_game != 'sair' && restart_game != 'SAIR') {                                                                                                                  // Verifica se o valor digitado é diferente de 'sair' ou 'SAIR' para reiniciar o loop 'while' e realizar uma nova conferência.
    console.log('\nCerto, vamos jogar novamente o/')                                                                                                                    // Sendo diferente, exibe no terminal uma mensagem de reinício da conferência.
    continue                                                                                                                                                            // Reinicia o loop while.
    } else {                                                                                                                                                            // Sendo o valor armazenado em 'restart_system' igual a 'sair' ou 'SAIR'.
        console.log('Obrigado por jogar!\nAté mais!')                                                                                                                   // Exibe no terminal a mensagem de despedida
        setTimeout(() => {                                                                                                                                              // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                                                                                  // Encerra o processo o processo e finaliza o programa
        }, 3000)                                                                                                                                                        // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
        }
    break                                                                                                                                                               // Encerra o loop 'while' e finaliza o programa

}
