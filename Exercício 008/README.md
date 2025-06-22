# Exercício 8 - Soma de Vendas por Cliente

### 📋 Visão Geral
Este código JavaScript calcula o valor total de vendas para cada cliente a partir de uma lista de transações. Ele utiliza um array de objetos contendo informações de vendas e agrega os valores por cliente.

### ✨ Funcionalidades
- Processa uma lista de vendas com múltiplas transações por cliente
- Agrupa e soma os valores totais de compras por cliente
- Retorna um objeto onde as chaves são os IDs dos clientes e os valores são os totais acumulados

### 🛠️ Como Funciona
1. Estrutura de Dados Inicial:
    - O array vendas contém objetos com duas propriedades cada:
      - cliente: número identificador do cliente
      - total: valor da transação
2. Processamento com reduce():
    - Utiliza o método reduce() para iterar sobre o array de vendas
    - Para cada transação:
      - Verifica se o cliente já existe no acumulador (acc)
      - Se não existir, inicializa com 0
      - Soma o valor da transação atual ao total existente
3. Resultado Final:
    - Gera um objeto onde:
      - Cada chave é o ID do cliente (ex: 101, 102, etc.)
      - Cada valor é a soma total de todas as compras daquele cliente
4. Saída:
  - O resultado é exibido no console, mostrando o total acumulado por cliente

### 💻 Tecnologias Utilizadas
- JavaScript/Node.js
- Biblioteca prompt-sync para entrada de dados no terminal

### � Requisitos
- Node.js instalado na máquina
- Pacote prompt-sync instalado (pode ser instalado via npm)

### 🚀 Instalação e Execução
1. Certifique-se de ter o Node.js instalado (https://nodejs.org/pt/download);
2. Instale o pacote prompt-sync no **Prompt de Comando**;
```bash
npm install prompt-sync
```
3. Baixe o arquivo `Exercício 8 - Soma de Vendas por Cliente` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, Soma de Vendas por Cliente.js);
4. Execute o programa com Node.js JavaScript RunTime;
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
