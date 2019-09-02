# Next Product
[![Coverage Status](https://coveralls.io/repos/github/willywax/NextProduct/badge.svg?branch=develop)](https://coveralls.io/github/willywax/NextProduct?branch=develop)
[![Build Status](https://travis-ci.org/willywax/NextProduct.svg?branch=develop)](https://travis-ci.org/willywax/NextProduct)
[![Maintainability](https://api.codeclimate.com/v1/badges/ba717f114d08efc1a875/maintainability)](https://codeclimate.com/github/willywax/NextProduct/maintainability)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

NEXTPRODUCT allows an individual or a group of individuals to vote on the product that they feel are in line with their values, so that they can decide to support

## Endpoints

1. Creating an account: POST request

```json
/auth/signup
```

Body :

```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "janedoe@example.com",
  "password": "pass1234"
}
```

Response:

```json
{
  "status": 201,
  "message": "Account successfully created!",
  "data": {
    "token": "43hgjg2u5gyg5ft4f5yg5u24g54.24h5f24k5y425.52h45fj245",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "janedoe@example.com"
  }
}
```

2. Logging In: POST request

```json
/auth/signin
```

Body :

```json
{
  "email": "janedoe@example.com",
  "password": "pass1234"
}
```

Response:

```json
{
  "status": 200,
  "message": "Successfully logged in!",
  "data": {
    "token": "43hgjg2u5gyg5ft4f5yg5u24g54.24h5f24k5y425.52h45fj245",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "janedoe@example.com"
  }
}
```

3. Posting a Product: POST request

```json
/products
```

Body:

```json
{
  "name": "NextProduct",
  "description": "NEXTPRODUCT allows an individual or a group of individuals to vote on the product that they feel are in line with their values, so that they can decide to support"
}
```

You can also optionally upload an image.

Response:

```json
{
  "status": 201,
  "message": "Product successfully added",
  "data": {
    "id": 324,
    "name": "NextProduct",
    "description": "NEXTPRODUCT allows an individual or a group of individuals to vote on the product that they feel are in line with their values, so that they can decide to support",
    "votes": 0,
    "image": "https://res.cloudinary.com/drayzii/image/upload/v1565290420/fssr8ssftpgqqg6p2d7k.png",
    "createdAt": "2019-08-16 21:58:12.578 +00:00",
    "updatedAt": "2019-08-17 21:58:12.578 +00:00"
  }
}
```

4. Updating a Product: PATCH request

```json
/products/:id
```

Body:

```json
{
  "name": "NextProduct",
  "description": "NEXTPRODUCT allows an individual or a group of individuals to vote on the product that they feel are in line with their values, so that they can decide to support"
}
```

You can also update the image.

Response:

```json
{
  "status": 200,
  "message": "Product successfully updated",
  "data": {
    "id": 324,
    "name": "NextProduct",
    "description": "NEXTPRODUCT allows an individual or a group of individuals to vote on the product that they feel are in line with their values, so that they can decide to support",
    "votes": 46,
    "image": "https://res.cloudinary.com/drayzii/image/upload/v1565290420/fssr8ssftpgqqg6p2d7k.png",
    "createdAt": "2019-08-16 21:58:12.578 +00:00",
    "updatedAt": "2019-08-17 21:58:12.578 +00:00"
  }
}
```

5. Deleting a Product: DELETE request

```json
/products/:id
```

Response:

```json
{
  "status": 200,
  "message": "Product Successfully deleted!"
}
```

6. Viewing all my Products: GET request

```json
/products/my - products
```

Response:

```json
{
    "status": 200,
    "message":"Successfully retrieved all your products",
    "data": [{
        "id": 324,
        "name": "NextProduct",
        "description": "NEXTPRODUCT allows an individual or a group of individuals to vote on the product that they feel are in line with their values, so that they can decide to support",
        "votes": 74,
        "image": "https://res.cloudinary.com/drayzii/image/upload/v1565290420/fssr8ssftpgqqg6p2d7k.png",
        "createdAt": "2019-08-16 21:58:12.578 +00:00",
        "updatedAt": "2019-08-17 21:58:12.578 +00:00"
    },
    {
        "id": 357,
        "name": "NewProduct",
        "description": "NEXTPRODUCT allows an individual or a group of individuals to vote on the product that they feel are in line with their values, so that they can decide to support",
        "votes": 53,
        "image": "https://res.cloudinary.com/drayzii/image/upload/v1565290420/fssr8ssftpgqqg6p2d7k.png",
        "createdAt": "2019-08-16 21:58:12.578 +00:00",
        "updatedAt": "2019-08-17 21:58:12.578 +00:00"
    }...]
}
```

7. Viewing all Products: GET request

```json
/products
```

Response:

```json
{
    "status": 200,
    "message":"Successfully retrieved all products",
    "data": [{
        "id": 324,
        "name": "NextProduct",
        "description": "NEXTPRODUCT allows an individual or a group of individuals to vote on the product that they feel are in line with their values, so that they can decide to support",
        "votes": 85,
        "image": "https://res.cloudinary.com/drayzii/image/upload/v1565290420/fssr8ssftpgqqg6p2d7k.png",
        "createdAt": "2019-08-16 21:58:12.578 +00:00",
        "updatedAt": "2019-08-17 21:58:12.578 +00:00"
    },
    {
        "id": 357,
        "name": "NewProduct",
        "description": "NEXTPRODUCT allows an individual or a group of individuals to vote on the product that they feel are in line with their values, so that they can decide to support",
        "votes": 64,
        "image": "https://res.cloudinary.com/drayzii/image/upload/v1565290420/fssr8ssftpgqqg6p2d7k.png",
        "createdAt": "2019-08-16 21:58:12.578 +00:00",
        "updatedAt": "2019-08-17 21:58:12.578 +00:00"
    }...]
}
```

8. Viewing a Product: GET request

```json
/products/:id
```

Response:

```json
{
  "status": 200,
  "message": "Successfully retrieved the product",
  "data": {
    "id": 324,
    "name": "NextProduct",
    "description": "NEXTPRODUCT allows an individual or a group of individuals to vote on the product that they feel are in line with their values, so that they can decide to support",
    "votes": 64,
    "image": "https://res.cloudinary.com/drayzii/image/upload/v1565290420/fssr8ssftpgqqg6p2d7k.png",
    "createdAt": "2019-08-16 21:58:12.578 +00:00",
    "updatedAt": "2019-08-17 21:58:12.578 +00:00"
  }
}
```

9. Upvoting a Product: PATCH request

```json
/products/:id/upvote
```

Response:

```json
{
  "status": 200,
  "message": "Successfully upvoted the product",
  "data": {
    "id": 324,
    "name": "NextProduct",
    "description": "NEXTPRODUCT allows an individual or a group of individuals to vote on the product that they feel are in line with their values, so that they can decide to support",
    "votes": 52,
    "image": "https://res.cloudinary.com/drayzii/image/upload/v1565290420/fssr8ssftpgqqg6p2d7k.png",
    "createdAt": "2019-08-16 21:58:12.578 +00:00",
    "updatedAt": "2019-08-17 21:58:12.578 +00:00"
  }
}
```

10. Removing your upvote from a product: PATCH request

```json
/products/:id/removeUpvote
```

Response:

```json
{
  "status": 200,
  "message": "Successfully removed the upvote",
  "data": {
    "id": 324,
    "name": "NextProduct",
    "description": "NEXTPRODUCT allows an individual or a group of individuals to vote on the product that they feel are in line with their values, so that they can decide to support",
    "votes": 51,
    "image": "https://res.cloudinary.com/drayzii/image/upload/v1565290420/fssr8ssftpgqqg6p2d7k.png",
    "createdAt": "2019-08-16 21:58:12.578 +00:00",
    "updatedAt": "2019-08-17 21:58:12.578 +00:00"
  }
}
```

11. Adding  a Comment: POST request

```json
/products/:id/comment
```

Response:

```json
{
  "status": 201,
  "message": "Comment Successfully added",
  "data": {
     "id": 3,
      "userId": 3,
      "productId": 1,
      "comment": "Cool Kids Commnet",
      "updatedAt": "2019-08-23T13:00:14.185Z",
      "createdAt": "2019-08-23T13:00:14.185Z"
  }
}

## Contributors

- Bahati Robben
- William Vedastus
- Jonathan Aurugai
- Jonathan jsonyaka
- Davis Kabiswa
