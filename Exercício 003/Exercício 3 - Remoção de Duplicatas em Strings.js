// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

string = 'olá olá mundo mundo'                              // Declara a variável 'string' que contêm a frase 'olá olá mundo mundo'.
console.log(string)                                         // Exibe no terminal o valor armazenado em 'string' para evidenciar todas as etapas.

arrString = string.split(" ")                               // Declara e inicializa o array 'arrString' armazenando um split da variável 'string'.
console.log(arrString)                                      // Exibe no terminal os valores armazenados no array 'arrString' para evidenciar todas as etapas.

arrStringUnique = []                                        // Declara e inicializa vazio o array 'arrStringUnique'.
console.log(arrStringUnique)                                // Exibe no terminal os valores armazenados no array 'arrStringUnique' para evidenciar todas as etapas.

for (let i = 0; i < arrString.length; i++) {                // Inicia um laço de repetição 'for' que percorre todos os índices do array 'arrString'.
    if(!arrStringUnique.includes(arrString[i])) {           // Verifica se o valor armazenado no indice que está sendo percorrido no array 'arrString' não está incluído no array arrStringUnique.
        arrStringUnique.push(arrString[i])                  // Armazena no array 'arrStringUnique' o valor no indice que está sendo percorrido em 'arrString'.
    }
}

console.log(arrStringUnique)                                // Exibe no terminal os valores armazenaos no array 'arrStringUnique' para evidenciar todas as etapas.
