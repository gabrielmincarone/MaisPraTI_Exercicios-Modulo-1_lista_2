# Exercício 7 - Sistema de Cadastro de Produtos

### 📋 Visão Geral
Este é um sistema de cadastro de produtos desenvolvido em JavaScript/Node.js que permite gerenciar um inventário de produtos eletrônicos. O sistema oferece um menu interativo via terminal com diversas funcionalidades para manipulação dos dados dos produtos.

### ✨ Funcionalidades
- **Cadastro de novos produtos:** Permite adicionar novos itens ao inventário com nome e preço
- **Remoção de produtos:** Oferece interface para visualizar e remover produtos existentes
- **Visualização de últimos cadastros:** Mostra os 5 últimos produtos adicionados
- **Visualização em tabela completa:** Apresenta todos os produtos em formato de tabela com diversas opções de ordenação
- **Visualização em lista simplificada:** Mostra apenas os nomes dos produtos com opções de ordenação
- **Sistema de confirmação:** Todas as ações críticas possuem etapas de confirmação
- **Interface amigável:** Menu intuitivo com feedback claro para o usuário

### 🛠️ Como Funciona
**O sistema utiliza:**
- Estrutura de dados: Array de objetos onde cada produto tem name e price
- Bibliotecas: prompt-sync para interação com o usuário via terminal
- Controle de fluxo: Loops while e do-while para manter os menus ativos
- Switch-case: Para gerenciar as diferentes opções do menu principal
- Métodos de array: push(), splice(), sort(), map(), slice() para manipulação dos dados
- Ordenação: Diferentes critérios de ordenação (alfabética e por preço)
- Formatação de saída: console.table() para exibição formatada dos dados

**Fluxo principal:**
1. Inicializa com uma lista pré-definida de produtos
2. Exibe menu principal com 6 opções
3. Cada opção leva a um submenu específico com suas próprias funcionalidades
4. Todas as operações são validadas antes de modificar os dados
5. O sistema só encerra quando o usuário explicitamente escolhe a opção de sair

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
3. Baixe o arquivo `Exercício 7 - Sistema de Cadastro de Produtos` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, Sistema de Cadastro de Produtos.js);
4. Execute o programa com Node.js JavaScript RunTime;
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
