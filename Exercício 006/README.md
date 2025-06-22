# Exercício 6 - Cálculo de Fatorial com Memoization

### 📋 Visão Geral
Este código implementa uma função para calcular o fatorial de um número de forma recursiva, com o acréscimo de uma técnica de otimização chamada "memoization" para armazenar resultados previamente calculados e melhorar o desempenho em chamadas subsequentes com os mesmos parâmetros.

### ✨ Funcionalidades
- Calcula o fatorial de números inteiros positivos.
- Implementa tratamento de erros para valores inválidos (números negativos).
- Utiliza memoization para cache de resultados.
- Exibe mensagem indicando quando o resultado foi obtido do cache.
- Suporte para chamadas recursivas eficientes.

### 🛠️ Como Funciona
1. Função fatorial(n):
    - Verifica se o número é negativo (retorna erro)
    - Caso base: se n = 0, retorna 1
     Caso recursivo: retorna n * fatorial(n-1)
2. Função memoize(fn):
    - Cria um cache (Map) para armazenar resultados
    - Gera uma chave única baseada nos argumentos
    - Verifica se o resultado já existe no cache
    - Se existir, retorna o valor armazenado com indicação de cache
    - Se não existir, calcula o resultado, armazena no cache e retorna
3. Uso:
    - A função fatorialMemoizer é a versão memoizada da função fatorial
    - Chamadas subsequentes com o mesmo parâmetro utilizam o cache
    - O cache é específico para cada conjunto de parâmetros

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
3. Baixe o arquivo `Exercício 6 - Cálculo de Fatorial com Memoization` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, Cálculo de Fatorial com Memoization.js);
4. Execute o programa com Node.js JavaScript RunTime;
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
