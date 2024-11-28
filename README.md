# Desafio 01 - Fundamentos do Node.js 🚀

Este repositório contém a solução do **Desafio 01** da trilha de Node.js do Ignite, com foco nos fundamentos do Node.js.

---

## 📖 Sobre o Desafio

Neste desafio, desenvolvi uma **API para gerenciar tarefas (tasks)**, incluindo funcionalidades para:  
- Criar, listar, atualizar, excluir, marcar como concluídas.  
- Importar tarefas em massa a partir de um arquivo CSV.

---

## ✨ Funcionalidades

A API implementa as seguintes funcionalidades:

1. **Criação de tarefas** (`POST - /tasks`)  
   - Criação de uma nova tarefa com os campos `title` e `description`.  
   - Os campos `id`, `created_at`, `updated_at` e `completed_at` são gerados automaticamente.  

2. **Listagem de tarefas** (`GET - /tasks`)  
   - Listagem de todas as tarefas.  
   - Permite buscar tarefas filtrando pelo `title` ou `description`.  

3. **Atualização de tarefas** (`PUT - /tasks/:id`)  
   - Atualização de `title` e/ou `description`.  
   - Validação para garantir que o `id` informado existe no banco de dados.  
   - Atualização automática do campo `updated_at`.  

4. **Exclusão de tarefas** (`DELETE - /tasks/:id`)  
   - Exclusão de uma tarefa pelo `id`.  
   - Validação para garantir que o `id` informado existe no banco de dados.  

5. **Marcar como concluída** (`PATCH - /tasks/:id/complete`)  
   - Marca uma tarefa como concluída ou desfaz a conclusão.  
   - O campo `completed_at` é atualizado com a data atual ou definido como `null`.  

6. **Importação de tarefas via CSV**  
   - Importação de múltiplas tarefas a partir de um arquivo CSV contendo as colunas `title` e `description`.  
   - Utiliza **Streams** para processar grandes volumes de dados de forma eficiente.  

---

## 🛠️ Tecnologias utilizadas

- **Node.js**: Plataforma para execução do JavaScript no lado do servidor.  
- **UUID**: Geração de identificadores únicos para as tarefas.  
- **File System (fs)**: Manipulação de arquivos, especialmente para a importação de CSVs.  
- **Streams**: Processamento eficiente de arquivos CSV.  

---

## 🚀 Como executar o projeto

### **Pré-requisitos**
- Ter o **Node.js** instalado.  
- Um gerenciador de pacotes como **npm** ou **yarn**.  

### **Passos para rodar o projeto**

1. **Clone o repositório:**  
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. **Acesse o diretório do projeto:**  
   ```bash
   cd nome-do-repositorio

3. **Instale as dependências:**  
   ```bash
   npm install

4. **A API estará disponível em:**  
   ```arduino
   http://localhost:3333
   
## Desafio resolvido por Pedro Carvalho. 🚀
