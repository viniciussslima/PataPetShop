![](./assets/Logo.svg)

# Projeto da diciplina

## DIM0547 - DESENVOLVIMENTO DE SISTEMAS WEB II

## Alunos:

- ### Daniele Carvalho
- ### Vinicius Santos

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

    401 - Error

    ```javascript
    {
        message: "Esse usuário não existe",
    }
    ```

- POST - /employee

  Adciona a um usuário o status de funcionário

  - BODY

    ```javascript
    {
        username: "username",
        type: "vet" // Esse campo aceita apenas vet, seller e washer
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

    409 - Error

    ```javascript
    {
        message: "Esse usuário já é um funcionário",
    }
    ```

- DELETE - /employee

  Remove o status de funcionário de usuário

  - Respostas

    200 - Sucesso

    401 - Error

    ```javascript
    {
        message: "Esse usuário não existe ou ele não é um funcinário",
    }
    ```

- POST - /product

  - BODY

    ```javascript
    {
        name: "nome"
        description: "descrição",
        price: 1.30
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

- GET - /products

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
        price: 10.10
    }]
    ```

- DELETE - /products

  Apaga um produto do sistema

  - BODY

    ```javascript
    {
      products: ["product1Id", "product2Id"],

    }
    ```

  - RESPOSTAS

    200 - Sucesso

    401 - Error

    ```javascript
    {
      message: "Esse produto não existe";
    }
    ```

- PUT - /products

  Atualiza um produto

  - BODY

    ```javascript
    {
        name: "nome do produto",
        keys: ["price", "name"], // O array aceita price, name e description
        values: [10, "product2"] // A ordem desse array deve ser correspondente a ordem do array keys
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
