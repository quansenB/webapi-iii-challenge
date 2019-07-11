const userRoutes = require('./users/userRouter.js');
const postRoutes = require('./posts/postRouter.js');
const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  console.log(req.url + req.method + Date.now())
};

server.use(logger);

server.use('/api/users', userRoutes);
server.use('/api/posts', postRoutes);

module.exports = server;
