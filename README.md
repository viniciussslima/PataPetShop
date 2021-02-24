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

- POST - /auth/login

  Autentica um usuário

  - BODY

  ```javascript
  {
      username: "username",
      password: "password"
  }
  ```

- POST - /employee/add

  Adciona a um usuário o status de funcionário

  - BODY

  ```javascript
  {
      username: "username",
      type: "vet" // Esse campo aceita apenas vet, seller e washer
  }
  ```

- DELETE - /employee/remove

  Remove o status de funcionário de usuário

- POST - /products/add
  - BODY
  ```javascript
  {
      products: ["product1Id", "product2Id"],
  }
  ```
- GET - /products

  Informa todos os produtos cadastrados

- DELETE - /products/remove

  Apaga um produto do sistema

  - BODY

  ```javascript
  {
    products: ["product1Id", "product2Id"],

  }
  ```

- PUT - /products/update

  Atualiza um produto

  - BODY

  ```javascript
  {
      id: "productId",
      keys: ["price", "name"], // O array aceita price, name e description
      values: [10, "product2"] // A ordem desse array deve ser correspondente a ordem do array keys
  }
  ```

- GET - /products/search

  Faz a pesquisa por produtos através de um texto

  - QUERY

  ```javascript
  {
      text: "text",
  }
  ```

- PUT - /cart/add

  Adiciona um produto ao carrinho

  - BODY

  ```javascript
  {
      id: "productId",
  }
  ```

- GET - /cart

  Informa todos os produto que estão no carrinho

- DELETE - /cart

  Apaga todos os produtos de um carrinho

- DELETE - /cart/products

  Apaga produtos específicos do carrinho

  - BODY

  ```javascript
  {
      products: ["product1Id", "product2Id"],
  }
  ```

- POST - /cart/buy

  Faz a compra dos produtos de um carrinho

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

- GET - /scale

  Informa os horários de um funcionário

  - QUERY

  ```javascript
  {
      id: "employeeId",
  }
  ```

- POST - /scheduling

  Marca um atendimento

  - BODY

  ```javascript
  {
      id: "scaleId",
  }
  ```

- GET - /scheduling

  Informa os atendimentos cadastrados
