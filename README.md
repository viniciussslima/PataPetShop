![](./assets/Logo.svg)

# Projeto da diciplina

## DIM0547 - DESENVOLVIMENTO DE SISTEMAS WEB II

## Alunos:

- ### Daniele Carvalho
- ### Vinicius Santos

## Variaveis de ambiente

- MYSQL_URL: URL do banco de dados mysql
- MYSQL_USER: Usuario do banco de dados
- MYSQL_PASSWORD: Senha do usuario do banco de dados

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

- POST - /auth/create

  Cadastra um novo usuário

  - BODY

    ```javascript
    {
        username: "username",
        password: "password"
    }
    ```

  - RESPOSTAS

    201 - Sucesso

    409 - Error

    ```javascript
    {
        message: "Esse usuário já existe",
    }
    ```

- POST - /auth/login

  Autentica um usuário

  - BODY

    ```javascript
    {
        username: "username",
        password: "password"
    }
    ```

  - RESPOSTAS

    200 - Sucesso

    ```javascript
    {
      token: "token", // Esse token deve ser usado para todas as requisições que necessitam de autorização
    }

    ```

    401 - Error

    ```javascript
    {
        message: "Esse usuário não existe",
    }
    ```

    401 - Error

    ```javascript
    {
        message: "Senha incorreta",
    }
    ```

- POST - /auth/logout

  Encerra a sensão de um usuário

  - RESPOSTAS

    200 - Sucesso

    ```javascript
    {
        token: null,
    }
    ```

- PUT - /user

  Atualiza um usuário

  - BODY

    ```javascript
    {
        username: "username",
        type: "vet" // Esse campo aceita apenas client, vet, seller, washer e admin. Os tipos só podem ser atualizados por administradores
    }
    ```

  - RESPOSTAS

    201 - Sucesso

    400 - Error

    ```javascript
    {
      message: "O valor do campo type é inválido",
    }
    ```

    401 - Error

    ```javascript
    {
        message: "Esse usuário não existe",
    }
    ```

- PUT - /user/password

  Atualiza a senha do usuário

  - BODY

    ```javascript
    {
        password: "password",
        newPassword: "newPassword"
    }
    ```

  - RESPOSTAS

    201 - Sucesso

    401 - Error

    ```javascript
    {
        message: "Senha incorreta",
    }
    ```

- GET - /user

  Retorna os usuarios dos tipos vet, washer, seller e admin

  - QUERY (OPCIONAL)

    ```javascript
    {
      type: "vet"; // O tipo pode ser apenas vet, washer, seller ou admin
    }
    ```

  - Respostas

    200 - Sucesso

    ```javascript
    [
      {
        username: "username",
        type: "vet",
      },
    ];
    ```

    400 - Error

    ```javascript
    {
      message: "O valor do campo type é inválido"
    },
    ```

- DELETE - /user

  Remove um usuário do sistema

  - Respostas

    200 - Sucesso

    401 - Error

    ```javascript
    {
        message: "Esse usuário não existe",
    }
    ```

- POST - /product

  - BODY

    ```javascript
    {
        name: "nome"
        description: "descrição",
        price: 1.30,
        stock: 10
    }
    ```

  - RESPOSTAS

    201 - Sucesso

    409 - Error

    ```javascript
    {
        message: "Esse produto já existe",
    }
    ```

- GET - /product

  Informa todos os produtos cadastrados

  - QUERY (OPCIONAL)

    ```javascript
    {
        name: "name",
    }
    ```

  - RESPOSTAS

    200 - Sucesso

    ```javascript
    [{
        name: "produto1"
        description: "descrição"
        price: 10.10,
        stock: 10
    }]
    ```

- DELETE - /product

  Apaga um produto do sistema

  - BODY

    ```javascript
    {
      products: ["product1Id", "product2Id"],

    }
    ```

  - RESPOSTAS

    200 - Sucesso

    400 - Error

    ```javascript
    {
      message: "Você tem que passar pelo menos um produto";
    }
    ```

- PUT - /product

  Atualiza um produto

  - BODY

    ```javascript
    {
        name: "nome do produto",
        description: "descrição"
        price: 10,
        stock: 10,
    }
    ```

  - RESPOSTAS

    201 - Sucesso

    401 - Error

    ```javascript
    {
      message: "Esse produto não existe",
    }
    ```

- PUT - /cart

  Adiciona um produto ao carrinho

  - BODY

    ```javascript
    {
        id: "productId",
    }
    ```

  - RESPOSTAS

    201 - Sucesso

    401 - Error

    ```javascript
    {
      message: "Esse produto não existe",
    }
    ```

- GET - /cart

  Informa todos os produto que estão no carrinho

  - RESPOSTAS

    200 - Sucesso

    ```javascript
    [{
        name: "produto1"
        description: "descrição"
        price: 10.10
    }]
    ```

- DELETE - /cart

  Apaga todos os produtos de um carrinho

  - REPOSTAS

    200 - Sucesso

- DELETE - /cart/products

  Apaga produtos específicos do carrinho

  - BODY

    ```javascript
    {
        products: ["product1Id", "product2Id"],
    }
    ```

  - REPOSTAS

    200 - Sucesso

- POST - /cart/buy

  Faz a compra dos produtos de um carrinho

  - REPOSTAS

    200 - Sucesso

    406 - Error

    ```javascript
    {
      message: "O carrinho está vazio",
    }
    ```

- POST - /scale

  Cria uma horário de atendimento de um funcionário

  - BODY

    ```javascript
    {
        id: "employeeId",
        date: "01/01/2021",
        startHour: "10:30",
        endHour: "12:00"
    }
    ```

  - RESPOSTAS

    200 - Sucesso

    409 - Error

    ```javascript
    {
      message: "Esse horario desse funcionario está ocupado";
    }
    ```

- GET - /scale

  Informa os horários de um funcionário

  - QUERY

    ```javascript
    {
        id: "employeeId",
    }
    ```

  - RESPOSTAS

    200 - Sucesso

    ```javascript
    [
      {
        id: "scaleId",
        date: "01/01/2021",
        startHour: "10:30",
        endHour: "12:00",
      },
    ];
    ```

- POST - /scheduling

  Marca um atendimento

  - BODY

    ```javascript
    {
        id: "scaleId",
        user: "userId"
    }
    ```

  - RESPOSTAS

    200 - Sucesso

    409 - Erro

    ```javascript
    {
      message: "Esse horário já está agendado"
    },
    ```

- GET - /scheduling

  Informa os atendimentos cadastrados

  - RESPOSTAS

    200 - Sucesso

  ```javascript
  [
    {
      id: "scaleId",
      date: "01/01/2021",
      startHour: "10:30",
      endHour: "12:00",
    },
  ];
  ```
