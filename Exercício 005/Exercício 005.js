// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.

const search = (search1, search2) => console.log(`\nFim da pesquisa sobre "${search1}" em "${search2}":`)           // Inicia a função original 'search' que será controlada na função 'debounce' com os dois parâmetros que posteriormente serão utilizados em 'args'.

const searchDebounced = debounce(search, 2000)                                                                      // Declara 'searchDebounced' que é a função debounceada a função 'search' que será executada após 2000 milissegundos (2 segundos) sem novas chamadas.

searchDebounced('Debounce', 'JavaScript')                                                                           // Chama a função 'searchDebounced' com os argumentos 'Debounce' e 'JavaScript' que serão passados para posteriormente para o array 'args'


function debounce(fn, delay) {                                                                                      // Inicia função debouce que recebe (fn: função original que será controlada, delay: tempo de espera em milissegundos).
    let timeoutID = null                                                                                            // Declara e iniciar a variável 'timeoutID' vazia, ou seja, sem um timer ativo.
    return function(...args) {                                                                                      // Retorna uma nova função para o valor armazenado em 'fn', capturando no array '...args' os valores que serão implementados no debouce.
        console.log(`Buscando livros de ${args[1]} que possuem conteúdo sobre ${args[0]}.`)                         // Exibe no terminal a mensagem de busca pelos conteúdos no array 'args'.
        clearTimeout(timeoutID)                                                                                     // Cancela o timer anterior, caso exista, para evitar acúmulo de tempo. 
        timeoutID = setTimeout(() => {                                                                              // Atualiza o valor da variável 'timeoutID' criando um novo timer que será executado o 'delay'. 
            console.log(`Conteúdo encontrado na Biblioteca Virtual:\n`)                                             // Exibe no terminal uma simulação de busca.
            console.log('JavaScript: O Guia Definitivo - David Flanagan')                                           // Exibe no terminal uma simulação de busca.
            console.log('Lógica de Programação e Algoritmos com JavaScript - Edécio Fernando Iepsen')               // Exibe no terminal uma simulação de busca.
            console.log('O Melhor do JavaScript - Douglas Crockford')                                               // Exibe no terminal uma simulação de busca.
            fn.apply(this, args)                                                                                    // Executa a função original 'fn' dentro do contexto e com os argumentos em 'args'.
        }, delay)                                                                                                   // Define o tempo de espera em milissegundos.
    }
}