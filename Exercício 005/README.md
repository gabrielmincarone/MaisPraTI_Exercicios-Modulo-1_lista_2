# Exercício 5 - Implementação do Debounce

### 📋 Visão Geral
Este exercício demonstra a implementação do padrão debounce em JavaScript, que é uma técnica para controlar a frequência de execução de funções, especialmente útil para operações que não precisam ser executadas repetidamente em um curto espaço de tempo (como pesquisas em tempo real ou redimensionamento de janela).

### ✨ Funcionalidades
- Permite definir um intervalo mínimo entre execuções consecutivas de uma função
- Ignora chamadas subsequentes feitas antes do tempo de espera (delay) expirar
- Garante que a função será executada após o período de inatividade especificado
- Demonstra um caso de uso prático com simulação de busca em uma biblioteca virtual

### 🛠️ Como Funciona
1. Estrutura Principal:
    - A função search original recebe dois parâmetros e exibe uma mensagem de conclusão
    - A função debounce recebe uma função (fn) e um tempo de espera (delay), retornando uma versão "debounceada" da função original
2. Mecanismo do Debounce:
    - Cada chamada da função debounceada reinicia o timer
    - Se novas chamadas ocorrerem antes do timer expirar, a execução anterior é cancelada
    - A função original só é executada após o período completo de inatividade
3. Fluxo de Execução:
    - Quando chamada, a função debounceada primeiro exibe a mensagem de busca
    - Aguarda o tempo especificado (2000ms neste caso)
    - Se não houver novas chamadas nesse período, executa a simulação de busca e chama a função original
    - Exibe os resultados encontrados e a mensagem de conclusão
4. Caso de Uso Demonstrado:
    - Simula uma busca por livros sobre "Debounce" na categoria "JavaScript"
    - Mostra 3 resultados fictícios da "Biblioteca Virtual"
    - Finaliza com a mensagem de conclusão da pesquisa

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
3. Baixe o arquivo `Exercício 5 - Implementação do Debounce` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, Implementação do Debounce.js);
4. Execute o programa com Node.js JavaScript RunTime;
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
