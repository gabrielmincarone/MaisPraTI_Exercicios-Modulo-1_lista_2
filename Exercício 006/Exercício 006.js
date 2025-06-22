// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.

function fatorial(n) {                                                                              // Inicia uma função para verificar o fatorial do valor armazenado em 'n'.
    if(n < 0) return console.error('Valor inválido: São permitidos apenas valores positivos')       // Verifica se o valor armazenado em 'n' é menor que 0 (zero), sendo, exibe uma mensagem de erro e encerra o programa.
    if(n === 0) return 1                                                                            // Verifica se o valor armazenado em 'n' é 0 (zero), sendo, retorna que o fatorial é 1.
    if(n > 0) return n * fatorial(n-1)                                                              // Verifica se o valor armazenado em 'n' é maior que 0 (zero), sendo, de forma recursiva executa o cálculo até que chegue em 0 (caso base).
}

const fatorialMemoizer = memoize(fatorial)                                                          // Declara 'fatorialMemoizer' que é a função memoizada da função 'fatorial'.


function memoize(fn) {                                                                              // Inicia a função memoize recebendo uma função em 'fn'.
    const cache = new Map()                                                                         // Declara e inicia a constante 'cache' que cria um estrutura de dados chave-valor usando o método map.

    return function(...args) {                                                                      // Retorna uma nova função utilizando os argumentos (...args) contidos em na função 'fn'.
        const key = JSON.stringify(args)                                                            // Declara a constante 'key' que converte '...args' em uma string única para usar com chave.

    if (cache.has(key)) {                                                                           // Verifica se está armazenado no array 'cache' a chave criada na constante 'key'.
      return cache.get(key) + (' - Resultado em Cache')                                             // Retorna a chave contida no array 'cache' exibindo no terminal que o resultado foi obtido a partir de 'cache'.
    }

    const result = fn(...args)                                                                      // Declara a constante 'result' que chama a função 'fn' com os argumenos (...args) contidos na variável.
    cache.set(key, result)                                                                          // Armazena (set) no array 'cache' a chave criada em 'key' e o valor armazenado em 'result'

    return result                                                                                   // Retorna o valor armazenado na variavel 'result'.
  }
}

console.log(fatorialMemoizer(9))                                                                    // Chama a função 'fatorialMemoizer' com o valor de 7.
console.log(fatorialMemoizer(9))                                                                    // Chama novamente a função 'fatorialMemoizer' com o valor de 7 que não será calculada pois está em cache.
console.log(fatorialMemoizer(10))                                                                   // Chama a função 'fatorialMemoizer' com o valor de 10.