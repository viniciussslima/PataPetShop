![](./assets/Logo.svg)

# Projeto da diciplina

## DIM0547 - DESENVOLVIMENTO DE SISTEMAS WEB II

## Alunos:

- ### Daniele Carvalho
- ### Vinicius Santos

## Endpoints

- POST - /auth/create

  - BODY

  ```javascript
  {
      username: "username",
      password: "password"
  }
  ```

- POST - /auth/login

  - BODY

  ```javascript
  {
      username: "username",
      password: "password"
  }
  ```

- POST - /employee/add
  - BODY
  ```javascript
  {
      username: "username",
      type: "vet" // Esse campo aceita apenas vet, seller e washer
  }
  ```
- DELETE - /employee/remove
- POST - /products/add
  - BODY
  ```javascript
  {
      products: ["product1Id", "product2Id"],
  }
  ```
- GET - /products
- DELETE - /products/remove

  - BODY

  ```javascript
  {
    products: ["product1Id", "product2Id"],

  }
  ```

- PUT - /products/update
  - BODY
  ```javascript
  {
      id: "productId",
      keys: ["price", "name"] // O array aceita price, name e description
      values: [10, "product2"] // A ordem desse array deve ser correspondente a ordem do array keys
  }
  ```
- GET - /products/search
  - QUERY
  ```javascript
  {
      text: "text",
  }
  ```
- PUT - /cart/add
  - BODY
  ```javascript
  {
      id: "productId",
  }
  ```
- GET - /cart
- DELETE - /cart
- DELETE - /cart/products
  - BODY
  ```javascript
  {
      products: ["product1Id", "product2Id"],
  }
  ```
- POST - /cart/buy
- POST - /scale
  - BODY
  ```javascript
  {
      id: "employeeId",
      date: "01/01/2021",
      startHour: "10:30"
      endHour: "12:00"
  }
  ```
- GET - /scale
  - QUERY
  ```javascript
  {
      id: "employeeId",
  }
  ```
- POST - /scheduling
  - BODY
  ```javascript
  {
      id: "scaleId",
  }
  ```
- GET - /scheduling
