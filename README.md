# User authentication API

This is a guided project by DIO's instructor [Renan J Paula](https://github.com/RenanJPaula/)
<br>
### Available Scripts:

```sh
npm run build
```

```sh
npm run dev
```
Open http://localhost:3000 to view it in your browser.
<br>

### Endpoints:

Users:
- GET /users
- GET /users/:uuid
- POST /users
- PUT /users/:uuid
- DELETE /users/:uuid

Authentication:

- POST /token <br> ![get a token](https://i.imgur.com/BgOsG62.png)

- POST /token/validate <br> ![validate a token](https://i.imgur.com/ZZwsoPG.png)

### Dependencies:
- PG:
```sh
npm install pg
```
- Express:
```sh
npm install express
```
- Status Codes: 
```sh
npm install http-status-codes
```
- JWT:
```sh
npm install jsonwebtoken
```

### Special thanks and resources
- [Renan's original project](https://github.com/RenanJPaula/dio-node-user-authentication-api)
- [Digital Innovation One](https://www.dio.me)
- [ElephantSQL](www.elephantsql.com)

### What's next?

- [ ] Add refresh token endpoint (/token/refresh)
- [ ] Add config library to use environment variables
