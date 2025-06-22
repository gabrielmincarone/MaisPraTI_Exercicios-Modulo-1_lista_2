// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

const prompt = require('prompt-sync') ()

const products = [                                                                                                          // Declara e inicia o array 'produtos' estruturado em 'nome' e 'preco'.
    {name: 'Notebook Sansung', price: 3999},
    {name: 'Monitor Ultrawild', price: 4999},
    {name: 'Kit Teclado e Mouse', price: 199},
    {name: 'TV Samsung 65', price: 5999},
    {name: 'PlayStation 5', price: 3999},
    {name: 'Suporte Articulado TV', price: 299},
    {name: 'Suporte Articulado Monitor', price: 259}
]

console.log('SISTEMA DE CADASTRO DE PRODUTO')                                                                               // Exibe no monitor o nome do sistema.

while(true) {                                                                                                               // Inicia um loop infinito 'while' que será encerrado quando o usuário digitar 6 em 'registerProduct'.

console.log('\nMENU PRINCIPAL\n1 - Cadastrar um novo produto.')                                                             // Exibe no terminal uma orientação ao usuário para digitar 1 (um) para acessar o menu 'Cadastrar um novo produto'.
console.log('2 - Remover um produto.')                                                                                      // Exibe no terminal uma orientação ao usuário para digitar 2 (dois) para acessar o menu 'Remover um produto'.
console.log('3 - Visualizar os últimos 5 produtos cadastrados.')                                                            // Exibe no terminal uma orientação ao usuário para digitar 3 (três) para acessar o menu 'Visualizar os últimos 5 produtos cadastrados'.
console.log('4 - Visualizar uma TABELA completa dos produtos cadastrados.')                                                 // Exibe no terminal uma orientação ao usuário para digitar 4 (quatro) para acessar o menu 'Visualizar uma TABELA completa dos produtos cadastrados'.
console.log('5 - Visualizar uma LISTA com os nomes dos produtos cadastrados.')                                              // Exibe no terminal uma orientação ao usuário para digitar 5 (cinco) para acessar o menu 'Visualizar uma LISTA com os nomes dos produtos cadastrados'.
console.log('6 - Para SAIR do sistema.\n')                                                                                  // Exibe no terminal uma orientação ao usuário para digitar 6 (seis) para acessar o menu 'Para SAIR do sistema'.

let registerProduct = Number(prompt('Digite a sua opção: '))                                                                // Declara e inicia a variavel 'registerProduct' solicitando ao usuário um valor para armazenar na variável.  

switch(registerProduct) {                                                                                                   // Inicia um swich case para controlar as ações na variável 'registerProduct'.
    case 1:                                                                                                                 // Case 1 - Cadastrar um novo produto.
        do {                                                                                                                // Inicia um loop infinito 'do-while' que controla as ações no menu Cadastrar Novo Produto.
            console.log('\nCADASTRAR NOVO PRODUTO')                                                                         // Exibe no terminal o menu que o usuário está acessando.
            let newProductName = prompt('Insira o NOME do produto: ')                                                       // Declara e inicia a variável 'newProductName' solicitando ao usuário um valor para ficar armazenado na variável. 
            let newProductPrice = Number(prompt('Insira o PREÇO do produto: '))                                             // Declara e inicia a variável 'newProductPrice' solicitando ao usuário um valor para ficar armazenado na variável.
            console.log(`\nRevisar Dados do Produto: Nome - ${newProductName} | Preço - ${newProductPrice}`)                // Exibe no terminal uma mensagem informando nome (newProductName) e o preço (newProductPrice) do produto que está sendo cadastrado.
            console.log('\nVALIDAR CADASTRO:\n1 - Validar inclusão.')                                                       // Exibe no terminal uma orientação ao usuário para digitar 1 (um) para validar a inclusão do novo produto.
            console.log('2 - Corrigir nome e/ou preço.')                                                                    // Exibe no terminal uma orientação ao usuário para digitar 2 (dois) para corrigir o nome e/ou preço do novo produto.
            console.log('3 - Cancelar operação.\n')                                                                         // Exibe no terminal uma orientação ao usuário para digitar 3 (três) para cancelar a operação.
            let validadeAddedProduct = Number(prompt('Digite a sua opção: '))                                               // Declara e inicia a variável 'validadeAddedProduct' solicitando ao usuário um valor para ficar armazenado na variável que irá controlar as ações de cadastrar um novo produto. 
            
            if(validadeAddedProduct === 1) {                                                                                // Verifica se o valor armazenado em 'validadeAddedProduct' é 1.
                products.push({name: newProductName, price: newProductPrice})                                               // Inclui no array 'products' os valores armazenados em 'newProductName' para 'name' e 'newProductPrice' para 'price'.
                console.log('\nProduto adicionado com sucesso!\n')                                                          // Exibe no terminal a mensagem que o produto foi cadastrado com sucesso.
                break                                                                                                       // Encerra o loop 'do-while' que controla as ações no menu Cadastrar Novo Produto.
            } else if(validadeAddedProduct === 2) {                                                                         // Verifica se o valor armazenado em 'validadeAddedProduct' é 2.
                continue                                                                                                    // Retorna ao início do loop 'do-while' que controla as ações no menu Cadastrar Novo Produto.
            } else if(validadeAddedProduct === 3) {                                                                         // Verifica se o valor armazenado em 'validadeAddedProduct' é 3.
                console.log('\nOperação cancelada.\n')                                                                      // Exibe no terminal a mensagem de operação cancelada.
                break                                                                                                       // Encerra o loop 'do-while' que controla as ações no menu Cadastrar Novo Produto.
            }

        } while(true)                                                                                                       // Encerra o loop do-while quando true, ou seja, validar todas as opções do 'if(validadeAddedProduct)'.
    
    continue                                                                                                                // Retorna ao início do loop 'while' que controla as ações do Menu Principal.
            
    case 2:                                                                                                                 // Case 2 - Remover Produtos.
        do {                                                                                                                // Inicia um loop infinito 'do-while' que controla as ações no menu Remover Produtos.
            console.log('\nMENU REMOVER PRODUTOS')                                                                          // Exibe no terminal o menu que o usuário está acessando.
            console.log('1 - Visualizar Lista e Excluir Produto')                                                           // Exibe no terminal uma orientação ao usuário para digitar 1 (um) para Visualizar Lista e Excluir Produto.
            console.log('2 - Retornar ao Menu Principal\n')                                                                 // Exibe no terminal uma orientação ao usuário para digitar 2 (dois) para Retornar ao Menu Principal.
            userNavegation = Number(prompt('Digite a sua opção: '))                                                         // Declara e inicia a variável 'userNavegation' para controlar as ações em remover produtos.

            if(userNavegation === 1) {                                                                                      // Verifica se o valor armazenado em 'userNavegation' é 1.
                products.sort((a, b) => a.name.localeCompare(b.name))                                                       // Ordena o array 'products' em ordem alfabética A-Z.
                console.log('\nLista em Ordem Alfabética (a - z) dos Produtos.')                                            // Exibe no terminal uma mensagem com o título da lista.
                console.table(products)                                                                                     // Exibe no terminal em formato de tabela todos os itens armazenados no array 'products'.

                console.log('Verifique na Lista de Produtos acima o ÍNDICE do produto que deseja remover.')                 // Exibe no terminal uma mensagem orientando o usuário como que se remove um produto da lista.
                removeProduct = Number(prompt('Digite o ÍNDICE do produto a ser removido: '))                               // Declara e inicia a variável 'removeProduct' solicitando ao usuário o índice do produto que deve ser removido.

                console.log(`\nConfirma a exclusão do produto ${products[removeProduct].name}?`)                            // Exibe no terminal uma mensagem pedindo ao usuário para verificar se o produto a ser removido está correto.
                console.log('1 - Confirmar exclusão')                                                                       // Exibe no terminal uma orientação ao usuário para digitar 1 (um) para Confirmar Exclusão.
                console.log('2 - Retornar ao Menu Remover Produtos\n')                                                      // Exibe no terminal uma orientação ao usuário para digitar 2 (dois) para Retornar ao Menu Remover Produtos.
                userNavegation = Number(prompt('Confirme a sua ação: '))                                                    // Atualiza a variável 'userNavegation' para controlar as ações em remover produtos.

                if(userNavegation === 1) {                                                                                  // Verifica se o valor armazenado em 'userNavegation' é 1.
                products.splice(removeProduct, 1)                                                                           // Utiliza o método splice para remover do array 'products' o índice armazenado em 'removeProduct'. 
                console.log('PRODUTO EXCLUÍDO')                                                                             // Exibe no terminal uma mensagem informando que o produto foi removido.
                } else {                                                                                                    // Verifica se o valor armazenado em 'userNavegation' não é 1.
                    continue                                                                                                // Retorna ao início do loop 'do-while' que controla as ações do menu Remover Produtos.
                }

                continue                                                                                                    // Retorna ao início do loop 'do-while' que controla as ações do menu Remover Produtos.

            } else if(userNavegation != 1) {                                                                                // Verifica se o valor armazenado em 'userNavegation' nao é 1.
                break                                                                                                       // Encerra o loop 'do-while' que controla as ações no menu Remover Produtos.
            }

        } while (true)                                                                                                      // Encerra o loop do-while quando true, ou seja, validar todas as opções do 'if(userNavegation)'.

        continue                                                                                                            // Retorna ao início do loop 'while' que controla as ações do Menu Principal.

    case 3:                                                                                                                 // Case 3 - Visualizar os últimos 5 produtos cadastrados.
        console.log('\nLista dos 5 últimos produtos adicionados na Base de Produtos')                                       // Exibe no terminal uma mensagem com o título da lista.
        console.table(products.slice(-5))                                                                                   // Exibe no terminal em formato de tabela os últimos 5 elementos do array 'products' utilizando o método 'slice'.
        userNavegation = prompt('Digite ENTER para retornar ao MENU PRINCIPAL.')                                            // Atualiza a variável 'userNavegation' solicitando ao usuário teclar ENTER para retornar ao menu principal. Serve como uma pausa ao usuário para ler o relatório.
        continue                                                                                                            // Retorna ao início do loop 'while' que controla as ações do Menu Principal.

    case 4:                                                                                                                 // Case 4 - Visualizar uma TABELA completa dos produtos cadastrados.
    do {                                                                                                                    // Inicia um loop infinito 'do-while' que controla as ações no menu Tabela de Produtos Completa.
        console.log('\nMENU TABELA DE PRODUTOS COMPLETA')                                                                   // Exibe no terminal o menu que o usuário está acessando.
        console.log('1 - Visualizar em ordem alfabética A - Z')                                                             // Exibe no terminal uma orientação ao usuário para digitar 1 (um) para Visualizar em ordem alfabética A - Z.
        console.log('2 - Visualizar em ordem alfabética Z - A')                                                             // Exibe no terminal uma orientação ao usuário para digitar 2 (dois) para Visualizar em ordem alfabética Z - A.
        console.log('3 - Visualizar em ordem de preço A - Z')                                                               // Exibe no terminal uma orientação ao usuário para digitar 3 (três) para Visualizar em ordem de preço A - Z.
        console.log('4 - Visualizar em ordem de preço Z - A')                                                               // Exibe no terminal uma orientação ao usuário para digitar 3 (três) para Visualizar em ordem de preço Z - A.
        tableOrder = Number(prompt('Digite a sua opção: '))                                                                 // Declara e inicia a variável 'tableOrder' para controlar as ações em lista de produtos completa.

        if(tableOrder === 1) {                                                                                              // Verifica se o valor armazenado na variável 'tableOrder' é 1.
            products.sort((a, b) => a.name.localeCompare(b.name))                                                           // Chama uma função para ordenar o array 'products' em ordem alfabética A - Z.
            console.log('\nTabela em Ordem Alfabética (a - z) dos Produtos.')                                               // Exibe no terminal uma mensagem com o título da tabela ordenada.
            console.table(products)                                                                                         // Exibe no terminal uma tabela com os itens armazenados no array 'products' em ordem alfabética A - Z.

            console.log('1 - Retornar ao MENU PRINCIPAL\n2 - Nova consulta em TABELA DE PRODUTOS')                          // Exibe no terminal uma orientação ao usuário para digitar 1 (um) para retornar ao Menu Principal ou 2 (dois) para realizar uma nova consulta em Tabela de Produtos.
            userNavegation = Number(prompt('Digite a sua opção: '))                                                         // Atualiza a variável 'userNavegation' para controlar a próxima ação em Tabela de Produtos.

            if(userNavegation === 1) {                                                                                      // Verifica se o valor armazenado em 'userNavegation' é 1.
                break                                                                                                       // Encerra o loop 'do-while' que controla as ações no menu Tabela de Produtos.
            } else if(userNavegation === 2) {                                                                               // Verifica se o valor armazenado em 'userNavegation' é 2.
                continue                                                                                                    // Reinicia o loop 'do-while' que controla as ações no menu Tabela de Produtos.
            }

        } else if(tableOrder === 2) {                                                                                       // Verifica se o valor armazenado na variável 'tableOrder' é 2.
            products.sort((a, b) => b.name.localeCompare(a.name))                                                           // Chama uma função para ordenar o array 'products' em ordem alfabética Z - A.
            console.log('\nTabela em Ordem Alfabética (z - a) dos Produtos.')                                               // Exibe no terminal uma mensagem com o título da tabela ordenada.
            console.table(products)                                                                                         // Exibe no terminal uma tabela com os itens armazenados no array 'products' em ordem alfabética Z - A.

            console.log('1 - Retornar ao MENU PRINCIPAL\n2 - Nova consulta em LISTA DE PRODUTO')                            // Exibe no terminal uma orientação ao usuário para digitar 1 (um) para retornar ao Menu Principal ou 2 (dois) para realizar uma nova consulta em Tabela de Produtos.
            userNavegation = Number(prompt('Digite a sua opção: '))                                                         // Atualiza a variável 'userNavegation' para controlar a próxima ação em Tabela de Produtos.

            if(userNavegation === 1) {                                                                                      // Verifica se o valor armazenado em 'userNavegation' é 1.
                break                                                                                                       // Encerra o loop 'do-while' que controla as ações no menu Tabela de Produtos.
            } else if(userNavegation === 2) {                                                                               // Verifica se o valor armazenado em 'userNavegation' é 2.
                continue                                                                                                    // Reinicia o loop 'do-while' que controla as ações no menu Tabela de Produtos.
            }

        } else if(tableOrder === 3) {                                                                                       // Verifica se o valor armazenado na variável 'tableOrder' é 3.
            products.sort((a, b) => a.price - b.price)                                                                      // Chama uma função para ordenar o array 'products' em ordem de preço A - Z.
            console.log('\nTabela Ordenada por Preço (a - z) dos Produtos.')                                                // Exibe no terminal uma mensagem com o título da tabela ordenada.
            console.table(products)                                                                                         // Exibe no terminal uma tabela com os itens armazenados no array 'products' em ordem de preço A - Z.

            console.log('1 - Retornar ao MENU PRINCIPAL\n2 - Nova consulta em LISTA DE PRODUTO')                            // Exibe no terminal uma orientação ao usuário para digitar 1 (um) para retornar ao Menu Principal ou 2 (dois) para realizar uma nova consulta em Tabela de Produtos.
            userNavegation = Number(prompt('Digite a sua opção: '))                                                         // Atualiza a variável 'userNavegation' para controlar a próxima ação em Tabela de Produtos.

            if(userNavegation === 1) {                                                                                      // Verifica se o valor armazenado em 'userNavegation' é 1.
                break                                                                                                       // Encerra o loop 'do-while' que controla as ações no menu Tabela de Produtos.
            } else if(userNavegation === 2) {                                                                               // Verifica se o valor armazenado em 'userNavegation' é 2.
                continue                                                                                                    // Reinicia o loop 'do-while' que controla as ações no menu Tabela de Produtos.
            }

        } else if(tableOrder === 4) {                                                                                       // Verifica se o valor armazenado na variável 'tableOrder' é 4.
            products.sort((a, b) => b.price - a.price)                                                                      // Chama uma função para ordenar o array 'products' em ordem de preço Z - A.
            console.log('\nTabela Ordenada por Preço (Z - a) dos Produtos.')                                                // Exibe no terminal uma mensagem com o título da tabela ordenada.
            console.table(products)                                                                                         // Exibe no terminal uma tabela com os itens armazenados no array 'products' em ordem de preço Z - A.

            console.log('1 - Retornar ao MENU PRINCIPAL\n2 - Nova consulta em LISTA DE PRODUTO')                            // Exibe no terminal uma orientação ao usuário para digitar 1 (um) para retornar ao Menu Principal ou 2 (dois) para realizar uma nova consulta em Tabela de Produtos.
            userNavegation = Number(prompt('Digite a sua opção: '))                                                         // Atualiza a variável 'userNavegation' para controlar a próxima ação em Tabela de Produtos.

            if(userNavegation === 1) {                                                                                      // Verifica se o valor armazenado em 'userNavegation' é 1.
                break                                                                                                       // Encerra o loop 'do-while' que controla as ações no menu Tabela de Produtos.
            } else if(userNavegation === 2) {                                                                               // Verifica se o valor armazenado em 'userNavegation' é 2.
                continue                                                                                                    // Reinicia o loop 'do-while' que controla as ações no menu Tabela de Produtos.
            }
        }

        } while (true)                                                                                                      // Encerra o loop do-while quando true, ou seja, validar todas as opções do 'if(tableOrder)'.
        
        continue                                                                                                            // Retorna ao início do loop 'while' que controla as ações do Menu Principal.

        case 5:                                                                                                             // Case 5 - Visualizar uma LISTA completa com o nome dos produtos cadastrados.
        do {                                                                                                                // Inicia um loop infinito 'do-while' que controla as ações no menu Lista de Produtos Nomes.
        console.log('\nMENU LISTA DE PODUTOS (NOMES)')                                                                      // Exibe no terminal o menu que o usuário está acessando.
        console.log('1 - Visualizar em ordem alfabética A - Z')                                                             // Exibe no terminal uma orientação ao usuário para digitar 1 (um) para Visualizar em ordem alfabética A - Z.
        console.log('2 - Visualizar em ordem alfabética Z - A')                                                             // Exibe no terminal uma orientação ao usuário para digitar 2 (dois) para Visualizar em ordem alfabética Z - A.
        console.log('3 - Visualizar em ordem de preço A - Z')                                                               // Exibe no terminal uma orientação ao usuário para digitar 3 (três) para Visualizar em ordem de preço A - Z.
        console.log('4 - Visualizar em ordem de preço Z - A')                                                               // Exibe no terminal uma orientação ao usuário para digitar 3 (três) para Visualizar em ordem de preço Z - A.
        listOrder = Number(prompt('Digite a sua opção: '))                                                                  // Declara e inicia a variável 'listOrder' para controlar as ações em lista de produtos completa.

        if(listOrder === 1) {                                                                                               // Verifica se o valor armazenado na variável 'listOrder' é 1.
            products.sort((a, b) => a.name.localeCompare(b.name))                                                           // Chama uma função para ordenar o array 'products' em ordem alfabética A - Z.
            const orderedList = products.map(product => product.name)                                                       // Declara e chama a função 'orderedList' que cria um novo array utilizando o método 'map' apenas com os itens armazenados em 'products[{name}]'
            console.log('\nLista em Ordem Alfabética (a - z) dos Produtos.')                                                // Exibe no terminal uma mensagem com o título da tabela ordenada.
            console.log(orderedList)                                                                                        // Exibe no terminal uma lista com os itens armazenados no array 'orderedList' em ordem alfabética A - Z.

            console.log('1 - Retornar ao MENU PRINCIPAL\n2 - Nova consulta em LISTA DE PRODUTO')                            // Exibe no terminal uma orientação ao usuário para digitar 1 (um) para retornar ao Menu Principal ou 2 (dois) para realizar uma nova consulta em Lista de Produtos.
            userNavegation = Number(prompt('Digite a sua opção: '))                                                         // Atualiza a variável 'userNavegation' para controlar a próxima ação em Tabela de Produtos.

            if(userNavegation === 1) {                                                                                      // Verifica se o valor armazenado em 'userNavegation' é 1.
                break                                                                                                       // Encerra o loop 'do-while' que controla as ações no menu Tabela de Produtos.
            } else if(userNavegation === 2) {                                                                               // Verifica se o valor armazenado em 'userNavegation' é 2.
                continue                                                                                                    // Reinicia o loop 'do-while' que controla as ações no menu Tabela de Produtos.
            }

        } else if(listOrder === 2) {                                                                                        // Verifica se o valor armazenado na variável 'listOrder' é 2.
            products.sort((a, b) => b.name.localeCompare(a.name))                                                           // Chama uma função para ordenar o array 'products' em ordem alfabética Z - A.
            const orderedList = products.map(product => product.name)                                                       // Declara e chama a função 'orderedList' que cria um novo array utilizando o método 'map' apenas com os itens armazenados em 'products[{name}]'
            console.log('\nLista em Ordem Alfabética (z - a) dos Produtos.')                                                // Exibe no terminal uma mensagem com o título da tabela ordenada.
            console.log(orderedList)                                                                                        // Exibe no terminal uma lista com os itens armazenados no array 'orderedList' em ordem alfabética Z - A.

            console.log('1 - Retornar ao MENU PRINCIPAL\n2 - Nova consulta em LISTA DE PRODUTO')                            // Exibe no terminal uma orientação ao usuário para digitar 1 (um) para retornar ao Menu Principal ou 2 (dois) para realizar uma nova consulta em Lista de Produtos.
            userNavegation = Number(prompt('Digite a sua opção: '))                                                         // Atualiza a variável 'userNavegation' para controlar a próxima ação em Tabela de Produtos.

            if(userNavegation === 1) {                                                                                      // Verifica se o valor armazenado em 'userNavegation' é 1.
                break                                                                                                       // Encerra o loop 'do-while' que controla as ações no menu Tabela de Produtos.
            } else if(userNavegation === 2) {                                                                               // Verifica se o valor armazenado em 'userNavegation' é 2.
                continue                                                                                                    // Reinicia o loop 'do-while' que controla as ações no menu Tabela de Produtos.
            }

        } else if(listOrder === 3) {                                                                                        // Verifica se o valor armazenado na variável 'listOrder' é 3.
            products.sort((a, b) => a.price - b.price)                                                                      // Chama uma função para ordenar o array 'products' em ordem de preço A - Z.
            const orderedList = products.map(product => product.name)                                                       // Declara e chama a função 'orderedList' que cria um novo array utilizando o método 'map' apenas com os itens armazenados em 'products[{name}]'
            console.log('\nLista Ordenada por Preço (a - z) dos Produtos.')                                                 // Exibe no terminal uma mensagem com o título da tabela ordenada.
            console.log(orderedList)                                                                                        // Exibe no terminal uma lista com os itens armazenados no array 'orderedList' em ordem de preço A - Z.

            console.log('1 - Retornar ao MENU PRINCIPAL\n2 - Nova consulta em LISTA DE PRODUTO')                            // Exibe no terminal uma orientação ao usuário para digitar 1 (um) para retornar ao Menu Principal ou 2 (dois) para realizar uma nova consulta em Lista de Produtos.
            userNavegation = Number(prompt('Digite a sua opção: '))                                                         // Atualiza a variável 'userNavegation' para controlar a próxima ação em Tabela de Produtos.

            if(userNavegation === 1) {                                                                                      // Verifica se o valor armazenado em 'userNavegation' é 1.
                break                                                                                                       // Encerra o loop 'do-while' que controla as ações no menu Tabela de Produtos.
            } else if(userNavegation === 2) {                                                                               // Verifica se o valor armazenado em 'userNavegation' é 2.
                continue                                                                                                    // Reinicia o loop 'do-while' que controla as ações no menu Tabela de Produtos.
            }

        } else if(listOrder === 4) {                                                                                        // Verifica se o valor armazenado na variável 'listOrder' é 4.
            products.sort((a, b) => b.price - a.price)                                                                      // Chama uma função para ordenar o array 'products' em ordem de preço Z - A.
            const orderedList = products.map(product => product.name)                                                       // Declara e chama a função 'orderedList' que cria um novo array utilizando o método 'map' apenas com os itens armazenados em 'products[{name}]'
            console.log('\nLista Ordenada por Preço (Z - a) dos Produtos.')                                                 // Exibe no terminal uma mensagem com o título da tabela ordenada.
            console.log(orderedList)                                                                                        // Exibe no terminal uma lista com os itens armazenados no array 'orderedList' em ordem de preço Z - A.

            console.log('1 - Retornar ao MENU PRINCIPAL\n2 - Nova consulta em LISTA DE PRODUTO')                            // Exibe no terminal uma orientação ao usuário para digitar 1 (um) para retornar ao Menu Principal ou 2 (dois) para realizar uma nova consulta em Lista de Produtos.
            userNavegation = Number(prompt('Digite a sua opção: '))                                                         // Atualiza a variável 'userNavegation' para controlar a próxima ação em Tabela de Produtos.

            if(userNavegation === 1) {                                                                                      // Verifica se o valor armazenado em 'userNavegation' é 1.
                break                                                                                                       // Encerra o loop 'do-while' que controla as ações no menu Tabela de Produtos.
            } else if(userNavegation === 2) {                                                                               // Verifica se o valor armazenado em 'userNavegation' é 2.
                continue                                                                                                    // Reinicia o loop 'do-while' que controla as ações no menu Tabela de Produtos.
            }
        }

    } while (true)                                                                                                          // Encerra o loop do-while quando true, ou seja, validar todas as opções do 'if(tableOrder)'.
        
    continue                                                                                                                // Retorna ao início do loop 'while' que controla as ações do Menu Principal.

    case 6:                                                                                                                 // Case 5 - Encerrar o Sistema de Cadastro.
        console.log('\nObrigado por utilizar nosso Sistema de Cadastro.')                                                   // Exibe no terminal uma mensagem de despedida ao usuário.
        
        setTimeout(() => {                                                                                                  // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                                      // Encerra o processo o processo e finaliza o programa
        }, 3000)                                                                                                            // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
        break

    default:                                                                                                                // Case default - quando o usuário digita uma opção inválida.
        console.log('\nOPÇÃO INVÁLIDA!\n')                                                                                  // Exibe no terminal uma mensagem informando o usuário de que a opçãp é inválida.
        continue                                                                                                            // Reinicia o loop 'do-while' que controla as ações no menu Tabela de Produtos.

}

break                                                                                                                       // Encerra o loop 'do-while'.
}
