# Exercício 1 - Validador de Datas

### 📋 Visão Geral
Programa em JavaScript/Node.js que verifica se uma data fornecida pelo usuário (dia, mês e ano) é válida.

### ✨ Funcionalidades
- Validação completa de datas incluindo:
    - Dias por mês (28-31 dias conforme o mês).
    - Anos bissextos (para fevereiro).
    - Intervalos válidos para mês (1-12).
    - Anos positivos.
- Loop contínuo para múltiplas verificações.
- Mensagens claras de resultado (válido/inválido).
- Opção para sair do programa.
- Temporizador para encerramento automático.
- Tratamento de entrada numérica.

### 🛠️ Como Funciona
1. O programa inicia com uma mensagem de boas-vindas.
2. Entra em um loop infinito (while(true)) que só é quebrado quando o usuário digita "sair".
3. Para cada iteração:
    - Solicita dia, mês e ano separadamente.
    - Converte as entradas para números.
    - Chama a função ehDataValida() para verificação.
4. A função de validação:
    - Verifica primeiro se o ano é positivo.
    - Verifica se o mês está entre 1-12.
    - Para meses com 31 dias: verifica se o dia está entre 1-31.
    - Para meses com 30 dias: verifica se o dia está entre 1-30.
    - Para fevereiro: verifica se é ano bissexto e valida dias (28 ou 29).
5. Exibe o resultado no formato booleano e uma mensagem amigável.
6. Pergunta se deseja continuar ou sair.
7. Se escolher sair, mostra mensagem de despedida e encerra após 3 segundos.

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
3. Baixe o arquivo `Exercício 1 - Validador de Datas` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, Validador de Datas.js);
4. Execute o programa com Node.js JavaScript RunTime;
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
