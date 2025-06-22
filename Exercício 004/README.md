# Exercício 4 - Calculadora de Fatorial Recursivo

### 📋 Visão Geral
Este programa é uma calculadora de fatorial que utiliza recursividade para calcular o fatorial de números inteiros positivos.

### ✨ Funcionalidades
- Calcula o fatorial de qualquer número inteiro positivo.
- Trata automaticamente números decimais arredondando-os para inteiros.
- Valida a entrada do usuário para garantir que seja um número válido.
- Oferece interface interativa que permite múltiplos cálculos sem reiniciar o programa.
- Exibe mensagens claras e amigáveis para o usuário.
- Implementa encerramento elegante com temporizador.

### 🛠️ Como Funciona
1. O programa solicita ao usuário um número inteiro maior que zero.
2. Tratamento de Entrada:
    - Se o valor digitado não for inteiro, o programa arredonda e informa ao usuário.
    - Valores negativos geram mensagem de erro
3. Cálculo Recursivo:
    - Caso base: fatorial de 0 retorna 1.
    - Passo recursivo: n * fatorial(n-1).
4. Exibe o resultado do cálculo formatado.
5. Controle de Fluxo:
    - Permite realizar novos cálculos ou encerrar o programa.
    - Encerramento com mensagem de despedida e timeout de 3 segundos

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
3. Baixe o arquivo `Exercício 4 - Calculadora de Fatorial Recursivo` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, Calculadora de Fatorial Recursivo.js);
4. Execute o programa com Node.js JavaScript RunTime;
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
