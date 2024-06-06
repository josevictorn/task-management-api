# Ignite Node.js Challenge: Task Management API

## Introdução

Bem-vindo ao desafio de desenvolvimento de uma API para gerenciamento de tarefas (tasks) do bootcamp de Node.js. Neste desafio, desenvolvemos uma API completa para realizar operações de CRUD em tasks, bem como a importação em massa de tasks a partir de um arquivo CSV.

## Sumário

- [Funcionalidades da API](#funcionalidades-da-api)
- [Estrutura das tasks](#estrutura-das-tasks)
- [Rotas e regras de negócio](#rotas-e-regras-de-negócio)
- [Validações](#validações)
- [Como executar o projeto](#como-executar-o-projeto)
- [Considerações finais](#considerações-finais)
- [Autor](#autor)

## Funcionalidades da API

A API foi desenvolvida para atender as seguintes funcionalidades:

- **Criação de uma task**
- **Listagem de todas as tasks**
- **Atualização de uma task pelo `id`**
- **Remoção de uma task pelo `id`**
- **Marcar pelo `id` uma task como completa**
- **Importação de tasks em massa por um arquivo CSV**

## Estrutura das tasks

Cada task possui a seguinte estrutura:

- `id` - Identificador único de cada task
- `title` - Título da task
- `description` - Descrição detalhada da task
- `completed_at` - Data de quando a task foi concluída. O valor inicial é `null`
- `created_at` - Data de quando a task foi criada
- `updated_at` - Data de quando a task foi atualizada

## Rotas e regras de negócio

### POST - `/tasks`
Criação de uma nova task.
- **Request Body:**
  ```json
  {
    "title": "Título da task",
    "description": "Descrição da task"
  }

### GET - `/tasks`
Listagem de todas as tasks.
- **Response:**
  ```json
  [
    {
      "id": "id-da-task",
      "title": "Título da task",
      "description": "Descrição da task",
      "completed_at": null,
      "created_at": "data-de-criação",
      "updated_at": "data-de-atualização"
    },
    ...
  ]

### PUT - `/tasks/:id`
Atualização de uma task pelo `id`.
- **Request Body (opcional):**
  ```json
  {
    "title": "Novo título da task",
    "description": "Nova descrição da task"
  }

### DELETE - `/tasks/:id`
Remoção de uma task pelo id.

### PATCH - `/tasks/:id/complete`
Marcação de uma task como completa ou incompleta.

## Validações
- As propriedades title e description são validadas nas rotas POST e PUT para garantir que estão presentes no corpo da requisição.
- Nas rotas que recebem o /:id, além de validar se o id existe no banco de dados, é retornada uma mensagem informando se o registro não existe.

## Como executar o projeto

### Pré-requisitos
- Node.js v14+ instalado
- NPM instalado

### Instalação
1. Clone o repositório:
```bash
  git clone https://github.com/seu-usuario/task-management-api.git
```
2. Navegue até o diretório do projeto
```bash
  cd task-management-api
```
3. Instale as dependências:
```bash
  npm install
```

### Execução
1. Inicie o servidor
```bash
  npm run dev
```
O servidor estará disponível em http://localhost:3333.

## Considerações finais

Este projeto foi desenvolvido com o intuito de praticar e consolidar os conhecimentos adquiridos no módulo de Node.js do Ignite. Foi um desafio gratificante que contribuiu para o meu aprendizado e crescimento profissional.

Qualquer dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou entrar em contato!

## Autor

Feito com amor por [@josevictorn](https://github.com/josevictorn)