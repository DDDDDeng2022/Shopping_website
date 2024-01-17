# A Shopping Website

> In this project, we are going to achieve both Front-end and Back-end of a shopping website.

## Technology we used

##### Programming Language

- Back-end
  - JavaScript
- Front-end
  - HTML
  - CSS

##### Back-end web application framework

- Express.JS
- Dotenv
- Jsonwebtoken

##### Front-end web application framework

- React
  - Material UI
  - React Redux
  - React router dom

##### Databases

- NoSQL
  - MongoDB
    - mongoose

## Repo format

- `client` 
  - for frontend
  - `src` 
    - for all code
    - `components`
    - `redux`
    - `services`
- `server` 
  - for backend
  - `controllers`
  - `db`
  - `middleware`
  - `routers`
- `dbInitData` 
  - for database initialized data
- `uploads` 
  - for user uploaded product image from local

```
├── README.md
├── .env                        // personal tokens
├── Shopping_website.png        // export png of deign mind note
├── docs                        // saved documents
│   ├── codingFormat.md
│   ├── environmentSetup.md
│   └── usefulCommands.md
├── client                      // Frontend repo
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src
└── server                      // Backend repo
    ├── package-lock.json
    ├── package.json
    ├── server.js
    ├── db
    │   ├── connectDB.js
    │   ├── schema.js
    │   └── user
    └── src
        ├── user
        └──
```
