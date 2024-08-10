#### Messenger chat app with no login

## A university senior gave me feedbacks on my codes, here is the lessons i took out from his words with a little bit reseach i did myself:

- Backend / frontend folder, for clear distinction.
- nodejs is env, nextjs is framework built on top of reactjs. Which enables server-side rendering, no need to route or use Express JS
- expressJS: is the HTTP server framework
- cors: allows us to process requests from other hosts (for our ReactJS app)
- axios: allows us to send HTTP requests to other servers (for Chat Engine APIs)
- nodemon: allows us to run the server in dev-mdoe
- process.env for backend, meta.env for frontend

// Yeah, i will learn more about those stuff

## backend folder
1. npm init ( to initialize node environment)
2. npm i express cors axios
3. npm i nodemon --save-dev
4. npm install dotenv
4. npm start ( start server)

## frontend folder
1. npm create vite@latest
2. npm install ( download all the dependencies)
3. npm run dev ( start the front end)
