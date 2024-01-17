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
├── Shopping_website.png
├── _dbInitData
├── _docs
├── client
│   ├── README.md
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── vite.svg
│   ├── src
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── components
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── cart
│   │   │   │   ├── CartDialog.jsx
│   │   │   │   ├── CartItem.jsx
│   │   │   │   ├── cartApi.js
│   │   │   │   └── cartStyle.js
│   │   │   ├── error
│   │   │   │   └── ErrorHandle.jsx
│   │   │   ├── product
│   │   │   │   ├── EditProct.jsx
│   │   │   │   ├── MainProductPage.jsx
│   │   │   │   ├── ProductButton.jsx
│   │   │   │   ├── ProductDetailPage.jsx
│   │   │   │   ├── ProductListPage.jsx
│   │   │   │   ├── categoryApi.js
│   │   │   │   ├── productApi.js
│   │   │   │   └── styledFile
│   │   │   │       ├── detailedProductPageStyle.js
│   │   │   │       ├── mainProductPageStyle.js
│   │   │   │       ├── productEditStyle.js
│   │   │   │       └── productListPageStyle.js
│   │   │   └── user
│   │   │       ├── AlertDialog.jsx
│   │   │       ├── EmailBar.jsx
│   │   │       ├── OuterBox.jsx
│   │   │       ├── PasswordBar.jsx
│   │   │       ├── SentEmail.jsx
│   │   │       ├── Signin.jsx
│   │   │       ├── Signup.jsx
│   │   │       ├── UpdatePasswordEmail.jsx
│   │   │       ├── UpdatePasswordPwd.jsx
│   │   │       └── dialog.css
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── redux
│   │   │   ├── EmailPswSlice.js
│   │   │   ├── loginStateSlice.js
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │   └── services
│   │       └── apiCall.js
│   └── vite.config.js
├── server
│   ├── controllers
│   │   ├── auth.js
│   │   ├── cart.js
│   │   ├── category.js
│   │   ├── product.js
│   │   └── user.js
│   ├── db
│   │   ├── connectDB.js
│   │   └── models
│   │       ├── category.js
│   │       ├── item.js
│   │       ├── order.js
│   │       ├── product.js
│   │       ├── role.js
│   │       ├── shippingAddress.js
│   │       └── user.js
│   ├── middleware
│   │   └── auth.js
│   ├── package-lock.json
│   ├── package.json
│   ├── routers
│   │   ├── authRouter.js
│   │   ├── cartRouter.js
│   │   ├── categoryRouter.js
│   │   ├── productRouter.js
│   │   └── userRouter.js
│   └── server.js
└── uploads
```
