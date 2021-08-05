const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { clientOrigins, serverPort } = require("./config/env.dev");

const { messagesRouter } = require("./messages/messages.router");

const app = express();
const apiRouter = express.Router();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors({
  origin: '*'
}));

console.log('for sure updated')

// app.use(express.json());

app.use("/api", apiRouter);

apiRouter.use("/messages", messagesRouter);

app.get('/test', (req, res, next) => {
  res.send('test endpoint')
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(serverPort, () =>
  console.log(`API Server listening on port ${serverPort}`)
);
