# Contactapp

This is a api basic developed with NodeJS for practices,
Using JWT for the authentication

This api use syntax current JavaScript and Babel for the convertion syntax


## Mathod from the API

Will be able to access to api with the nexts routes:

URL: https://apicontacts.glitch.me

```cs

/api/contact   -> (GET) Get the list from all contacts.
                        
/api/contact   -> (POST) Create a new contact.

/api/contact   -> (PUT) Update a contact.

/api/contact   -> (DELETE) Delete a contact.
```

To make request from url is necessary generate a token for the authorization,
this authorization can do it to url:


```cs

/api/user   -> (POST) Token request for sent user.

```
For example in the body from request
```cs
{
  "Username":"gedgonz",
  "Password":"123"
}
```
This request respond with the toke object

for example
```cs
{
    "auth": true,
    "toke": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwNGQzMjI1ZTIwYjQxMTE1YmJmNmY0ZCIsIlVzZXJuYW1lIjoiZ2VkZ29ueiIsIlBhc3N3b3JkIjoiJDJiJDEwJDdFMjNGRDJXbm9ZdHAuSzBldVVibC5xOUlDcWhIdXJrU0xtSEJQbDg3WUJQakJFb2plc1VlIiwiY3JlYXRlZEF0IjoiMjAyMS0wMy0xM1QyMTo0NDowNS43NzlaIiwidXBkYXRlZEF0IjoiMjAyMS0wMy0xM1QyMTo0NDowNS43NzlaIn0sImlhdCI6MTYxNTY3MjQ1NSwiZXhwIjoxNjE1NzU4ODU1fQ.fryIIi-MlwqjpHF4q4672U77FKJqsrIAQpqPTVDBz-s"
}

```
I hope it was clear! 😎
