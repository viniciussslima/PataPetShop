![](./assets/Logo.svg)

# Projeto da diciplina

## DIM0547 - DESENVOLVIMENTO DE SISTEMAS WEB II

## Alunos

- ### Daniele Carvalho
- ### Vinicius Santos

## Versão online

<a href="https://pata-pet-shop.herokuapp.com">https://pata-pet-shop.herokuapp.com</a>

## Dependências

- Docker
- NodeJS
- npm ou yarn

## Variaveis de ambiente

- MYSQL_URL: URL do banco de dados mysql
- MYSQL_USER: Usuario do banco de dados
- MYSQL_PASSWORD: Senha do usuario do banco de dados
- MYSQL_DB: Nome do database do mysql
- JWT_SECRET: Variavel usada para gerar os tokens do JWT

## Como usar

### Primeiro passo

Dentro da pasta API execute o comando:

```bash
$ npm install
```

OU

```bash
$ yarn install
```

### Segundo passo

Dentro da pasta API execute o comando:

```bash
$ npm run db
```

OU

```bash
$ yarn db
```

### Terceiro passo

Dentro da pasta API execute o comando:

```bash
$ npm start
```

OU

```bash
$ yarn start
```

## Testes

Os teste ficam no diretorio API/tests

Dentro da pasta API execute o comando:

```bash
$ yarn test
```

para rodar todos os testes

Ou para rodar um teste específico execute o comando:

```bash
$ yarn test NomeDoArquivoDeTeste
```

## Endpoints

- POST - /auth/login

  Autentica um usuário

  - BODY

    ```JSON
    {
        "username": "username",
        "password": "password"
    }
    ```

  - RESPOSTAS

    200 - Sucesso

    ```JSON
    {
      "token": "token", // Esse token deve ser usado para todas as requisições que necessitam de autorização
    }

    ```

    401 - Error

    ```JSON
    {
        "message": "Esse usuário não existe",
    }
    ```

    401 - Error

    ```JSON
    {
        "message": "Senha incorreta",
    }
    ```

- POST - /auth/logout

  Encerra a sensão de um usuário

  - RESPOSTAS

    200 - Sucesso

    ```JSON
    {
        "token": null,
    }
    ```

- POST - /user

  Cadastra um novo usuário

  - BODY

    ```JSON
    {
        "username": "username",
        "password": "password"
    }
    ```

  - RESPOSTAS

    201 - Sucesso

    409 - Error

    ```JSON
    {
        "message": "Esse usuário já existe",
    }
    ```

- PUT - /user

  Atualiza um usuário

  - BODY

    ```JSON
    {
        "username": "username",
        "type": "vet" // Esse campo aceita apenas client, vet, seller, washer e admin. Os tipos só podem ser atualizados por administradores
    }
    ```

  - RESPOSTAS

    201 - Sucesso

    400 - Error

    ```JSON
    {
      "message": "O valor do campo type é inválido",
    }
    ```

    401 - Error

    ```JSON
    {
        "message": "Esse usuário não existe",
    }
    ```

- PUT - /user/password

  Atualiza a senha do usuário

  - BODY

    ```JSON
    {
        "password": "password",
        "newPassword": "newPassword"
    }
    ```

  - RESPOSTAS

    201 - Sucesso

    401 - Error

    ```JSON
    {
        "message": "Senha incorreta",
    }
    ```

- GET - /user

  Retorna os usuarios dos tipos vet, washer, seller e admin

  - QUERY (OPCIONAL)

    ```JSON
    {
      "type": "vet"; // O tipo pode ser apenas vet, washer, seller ou admin
    }
    ```

  - Respostas

    200 - Sucesso

    ```JSON
    [
      {
        "username": "username",
        "type": "vet",
      },
    ];
    ```

    400 - Error

    ```JSON
    {
      "message": "O valor do campo type é inválido"
    },
    ```

- DELETE - /user

  Remove um usuário do sistema

  - Respostas

    200 - Sucesso

    401 - Error

    ```JSON
    {
        "message": "Esse usuário não existe",
    }
    ```

- POST - /product

  - BODY

    ```JSON
    {
        "name": "nome",
        "description": "descrição",
        "price": 1.30,
        "stock": 10
    }
    ```

  - RESPOSTAS

    201 - Sucesso

    409 - Error

    ```JSON
    {
        "message": "Esse produto já existe",
    }
    ```

- GET - /product

  Informa todos os produtos cadastrados

  - QUERY (OPCIONAL)

    ```JSON
    {
        "name": "name",
    }
    ```

  - RESPOSTAS

    200 - Sucesso

    ```JSON
    [
      {
        "name": "produto1",
        "description": "descrição",
        "price": 10.1,
        "stock": 10,
      },
    ];
    ```

- DELETE - /product

  Apaga um produto do sistema

  - BODY

    ```JSON
    {
      "products": ["product1Id", "product2Id"],

    }
    ```

  - RESPOSTAS

    200 - Sucesso

    400 - Error

    ```JSON
    {
      "message": "Você tem que passar pelo menos um produto";
    }
    ```

- PUT - /product

  Atualiza um produto

  - BODY

    ```JSON
    {
        "name": "nome do produto",
        "description": "descrição",
        "price": 10,
        "stock": 10
    }
    ```

  - RESPOSTAS

    201 - Sucesso

    400 - Error

    ```JSON
    {
      "message": "Esse produto não existe",
    }
    ```

- POST - /cart

  Adiciona um produto ao carrinho

  - BODY

    ```JSON
    {
        "product": "productName",
    }
    ```

  - RESPOSTAS

    201 - Sucesso

    401 - Error

    ```JSON
    {
      "message": "Esse produto não existe",
    }
    ```

- GET - /cart

  Informa todos os produto que estão no carrinho

  - RESPOSTAS

    200 - Sucesso

    ```JSON
    [
      {
        "name": "produto1",
        "price": 10.1,
        "qty": 2,
      },
    ];
    ```

- DELETE - /cart

  Apaga todos os produtos de um carrinho

  - REPOSTAS

    200 - Sucesso

- DELETE - /cart/product

  Apaga um produto específico do carrinho

  - BODY

    ```JSON
    {
        "product": "product1",
        "qty": 1,
    }
    ```

  - REPOSTAS

    200 - Sucesso

    400 - Error

    ```JSON
    {
      "message": "Não é possivel apagar uma quantidade superior ao que tem no carrinho",
    }
    ```

    400 - Error

    ```JSON
    {
      "message": "Não é possivel apagar um produto que não está no carrinho",
    }
    ```

- POST - /cart/buy

  Faz a compra dos produtos de um carrinho

  - REPOSTAS

    200 - Sucesso

    406 - Error

    ```JSON
    {
      "message": "O carrinho está vazio",
    }
    ```

    406 - Error

    ```JSON
    {
      "message": "O produto '{Nome do produto}' não está disponível no estoque",
    }
    ```

    406 - Error

    ```JSON
    {
      "message": "O produto '{Nome do produto}' só tem ${product.stock} unidades",
    }
    ```

- GET - /history

  Informa o historico de compras de um usuario

  - REPOSTAS

    200 - Sucesso

- GET - /history/:id

  Informa os dados de uma compra de um usuario

  - REPOSTAS

    200 - Sucesso

- POST - /scale

  Cria uma horário de atendimento de um funcionário

  - BODY

    ```JSON
    {
        "employee": "employeeUsername",
        "date": "01/01/2021",
        "startHour": "10:30",
        "endHour": "12:00"
    }
    ```

  - RESPOSTAS

    200 - Sucesso

    409 - Error

    ```JSON
    {
      "message": "Esse horario desse funcionario está ocupado";
    }
    ```

- GET - /scale/:employee

  Informa os horários de um funcionário

  - RESPOSTAS

    200 - Sucesso

    ```JSON
    [
      {
        "date": "01/01/2021",
        "startHour": "10:30",
        "endHour": "12:00",
      },
    ];
    ```

- POST - /scheduling

  Marca um atendimento

  - BODY

    ```JSON
    {
        "scale": {
          "employee": "username",
          "date": "01/01/2021",
          "startHour": "10:30",
          "endHour": "12:00",
        },
        "user": "userUsename"
    }
    ```

  - RESPOSTAS

    200 - Sucesso

    409 - Erro

    ```JSON
    {
      "message": "Esse horário já está agendado"
    },
    ```

- GET - /scheduling

  Informa os atendimentos cadastrados

  - RESPOSTAS

    200 - Sucesso

  ```JSON
  [
    {
      "employee": "username",
      "client": "usernmae",
      "date": "01/01/2021",
      "startHour": "10:30",
      "endHour": "12:00",
    },
  ];
  ```
