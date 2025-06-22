# Exercício 2 - Jogo da Adivinhação

### 📋 Visão Geral
O Jogo de Adivinhação é um programa simples onde o jogador deve tentar acertar um número aleatório gerado pelo sistema entre 1 e 100. O jogo fornece dicas após cada tentativa, indicando se o palpite do jogador está muito alto ou muito baixo em relação ao número secreto.

### ✨ Funcionalidades
- Geração aleatória de um número entre 1 e 100.
- Sistema de dicas detalhadas baseadas na proximidade do palpite.
- Contagem de tentativas.
- Feedback personalizado baseado no desempenho do jogador.
- Possibilidade de jogar novamente ou sair do jogo.
- Mensagens humorísticas e encorajadoras.
- Validação de entrada (apenas números entre 1 e 100).

### 🛠️ Como Funciona
1. O jogo gera um número aleatório entre 1 e 100 que o jogador precisa adivinhar.
2. O usuário digita seu palpite via prompt no terminal.
3. Feedback do sistema:
    - Se o palpite for correto, o jogo informa o acerto e mostra o número de tentativas.
    - Se o palpite for incorreto, o jogo fornece dicas detalhadas sobre quão próximo o palpite está do número correto (muito alto/baixo, próximo, muito próximo, etc.).
    - Se o palpite estiver fora do intervalo válido (1-100), o jogo solicita um novo número
4. Quando o jogador acerta, recebe um feedback personalizado baseado no número de tentativas.
5. O jogador pode optar por jogar novamente ou encerrar o jogo.
6. O jogo utiliza um sistema de dicas granular que varia conforme a diferença numérica:
    - Diferença ≥ 80: "muuuuito longe mesmo".
    - Diferença ≥ 40: "muuuuito longe".
    - Diferença ≥ 20: "longe".
    - Diferença ≥ 10: "no caminho".
    - Diferença > 5: "perto".
    - Diferença > 1: "muito perto".
    - Diferença = 1: "deu na trave".
7. O feedback final varia conforme o número de tentativas:
    - 1 tentativa: "Você hackeou o jogo".
    - 2-4 tentativas: "Já pensou em jogar na mega?".
    - 5-9 tentativas: "Você foi muito bem!".
    - 10-19 tentativas: "Passaram pessoas melhores que você por aqui".
    - 20+ tentativas: "Você não nasceu pra isso".

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
3. Baixe o arquivo `Exercício 2 - Jogo da Adivinhação` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, Jogo da Adivinhação.js);
4. Execute o programa com Node.js JavaScript RunTime;
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
