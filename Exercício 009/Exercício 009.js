// 9. Conversão Entre Formatos
// Escreva duas funções:
// - paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
// - objetoParaPares(obj) faz o inverso, retornando um array de pares.

// BLOCO SEM USAR FUNÇÃO
console.log('\nBLOCO SEM FUNÇÃO [PRATICANDO].\n')

const paresParaObjeto1 = [['nome', 'Gabriel'], ['idade', 36]]                                                   // Declara e inicia o array de pares 'paresParaObjeto'
const objParesParaObjeto1 = Object.fromEntries(paresParaObjeto1)                                                // Declara a constante 'objParesParaObjeto' que que são convertidos do array 'paresParaObjeto' utilizando o método 'Object.fromEntries'.
console.log('Array para Objeto:\n', objParesParaObjeto1)                                                        // Exibe no terminal as chaves e valores armazenados no objeto 'objParesParaObjeto'.

const objetoParaPares1 = {nome: 'Suelen', idade: 37}                                                            // Declara e inicia o objeto 'objetoParaPares'
const arrObjetoParaPares1 = Object.entries(objetoParaPares1)                                                    // Declara a constante 'arrObjetoParaPares' que que são convertidos do objeto 'objetoParaPares' utilizando o método 'Object.entries'.
console.log('Objeto para Array:\n', arrObjetoParaPares1)                                                        // Exibe no terminal as chaves e valores armazenados no array 'arrObjetoParaPares'.

// BLOCO USANDO FUNÇÃO TRADICIONAL
console.log('\n\nBLOCO COM FUNÇÃO TRADICIONAL.\n')

const arr1 = [['nome', 'Gabriel'], ['sobrenome', 'Mincarone'], ['idade', 36]]                                   // Declara o array de pares '[chave, valor]' chamado 'arr1'.
function paresParaObjeto2 (arr) {                                                                               // Declara a função 'paresParaObjeto2' que recebe um array ('arr').
    return Object.fromEntries(arr)                                                                              // Retorna um objeto convertido de um array ('arr') utilizando o método 'Object.fromEntries'.
}
console.log('Array para Objeto:\n', paresParaObjeto2(arr1))                                                     // Chama a função 'paresParaObjeto2' e exibe no terminal o resultado no console.

const obj1 = {nome: 'Suelen', sobrenome: 'Luz', idade: 37}                                                      // Declara o objeto de pares '[chave, valor]' chamado 'obj1'.
function objetoParaPares2 (obj) {                                                                               // Declara a função 'objetoParaPares2' que recebe um objeto ('obj').
    return Object.entries(obj)                                                                                  // Retorna um array convertido de um objeto ('obj') utilizando o método 'Object.entries'.
}
console.log('Objeto para Array:\n', objetoParaPares2(obj1))                                                     // Chama a função 'objetoParaPares2' e exibe no terminal o resultado no console.

// BLOCO USANDO ARROW FUNCTION
console.log('\n\nBLOCO COM ARROW FUNCTION.\n')

const arr2 = [['nome', 'Gabriel'], ['sobrenome', 'Mincarone'], ['idade', 36], ['cidade', 'Charqueadas']]        // Declara o array de pares '[chave, valor]' chamado 'arr2'.
const paresParaObjeto3 = arr => Object.fromEntries(arr)                                                         // Declara a função 'paresParaObjeto3' que recebe um array ('arr') e o converte para um objeto utilizando o método 'Object.fromEntries'
console.log('Array para Objeto:\n', paresParaObjeto3(arr2))                                                     // Chama a função 'paresParaObjeto3' e exibe no terminal o resultado no console.

const obj2 = {nome: 'Suelen', sobrenome: 'Luz', idade: 37, cidade: 'Charqueadas'}                               // Declara o objeto de pares '[chave, valor]' chamado 'obj2'.
const objetoParaPares3 = obj => Object.entries(obj)                                                             // Declara a função 'objetoParaPares3' que recebe um objeto ('obj') e o converte para um array utilizando o método 'Object.entries'
console.log('\nObjeto para Array:\n', objetoParaPares3(obj2))                                                   // Chama a função 'objetoParaPares3' e exibe no terminal o resultado no console.