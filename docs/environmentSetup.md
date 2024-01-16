# To Be Continued

## Suggested Software

- iTerm 2
  - `https://iterm2.com/downloads.html`
  - mac OS terminal, better than terminal
  - `oh-my-zsh`: make it colorful
- Codux
  - Visualized front-end code editor

## Setup Environment

- install node.js LTS
  - `https://nodejs.org/en`
- check node version and npm version
  ```
  node -v
  npm -v
  ```
- Frontend Setup
  - `npm create vite@latest`
  - React && JS
- Backend Setup
  - `npm init -y`
    - `-y` is answering yes to all init questions
    - initialize a simple start project
  - Add 2 scripts for easy pull up backend server
    - `npm run start`
      - We will use this for demo
      - `node server`
        - pulls up a server
    - **`npm run dev`**
      - We will mainly use this one for test
      - `nodemon server`
        - pulls up a nodemon server that will update if you change code
  - Add type as module so that we could use **ES modules** for coding
  - `npm i express`
    - Add express dependency
  - `npm i nodemon -D`
    - Add nodemon dependency
    - `-D` means nodemon is a devDependency
- Create local `.env` file
  - Save personal tokens

<!-- - install homebrew
  - dependency manager
- React
  - `npm i react` -->

## Repo setup(learned from linked video)

`https://www.youtube.com/watch?v=w3vs4a03y3I&ab_channel=ArpanNeupane`

- `cd server` ---> `npm init -y`
  - initialize backend stuffs
- Add frontend file `index.js` or something same as the `main` file name in `package.json`
- `npm i express`
  - Add express dependency
- `npm i nodemon`
  - Add nodemon dependency
