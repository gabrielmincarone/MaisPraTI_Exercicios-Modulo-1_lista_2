# Exercício 9 - Conversão entre Arrays e Objetos

### 📋 Visão Geral
Este exercício demonstra três abordagens diferentes para converter:
1. Arrays de pares [chave, valor] em objetos JavaScript.
2. Objetos JavaScript em arrays de pares [chave, valor].

As abordagens incluem:
- Implementação direta sem funções.
- Uso de funções tradicionais.
- Utilização de arrow functions.

### ✨ Funcionalidades
- **Conversão de Array para Objeto:** Transforma um array de pares [chave, valor] em um objeto JavaScript.
- **Conversão de Objeto para Array:** Transforma um objeto JavaScript em um array de pares [chave, valor].
- **Múltiplas Implementações:** Mostra a mesma funcionalidade implementada de três formas diferentes.

### 🛠️ Como Funciona
1. Bloco sem usar função:
    - Demonstra a conversão básica usando diretamente Object.fromEntries() e Object.entries().
    - Mostra a conversão em ambas as direções com exemplos simples.
2. Bloco com função tradicional:
    - Encapsula a lógica de conversão em funções nomeadas.
    - paresParaObjeto2() converte array para objeto.
    - objetoParaPares2() converte objeto para array.
    - Permite reutilização do código com diferentes inputs.
3. Bloco com arrow function:
    - Implementa a mesma funcionalidade usando sintaxe concisa de arrow functions.
    - paresParaObjeto3 é uma arrow function que converte array para objeto.
    - objetoParaPares3 é uma arrow function que converte objeto para array.
    - Mostra como simplificar ainda mais a implementação.
4. Técnicas utilizadas:
    - Object.fromEntries() para converter array → objeto.
    - Object.entries() para converter objeto → array.
    - Demonstração de diferentes estilos de função em JavaScript.
    - Exemplos progressivamente mais complexos em cada bloco.

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
3. Baixe o arquivo `Exercício 9 - Conversão entre Arrays e Objetos` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, Conversão entre Arrays e Objetos.js);
4. Execute o programa com Node.js JavaScript RunTime;
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
