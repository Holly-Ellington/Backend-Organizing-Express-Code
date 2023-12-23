const express = require("express");
const app = express();
const notesRouter = require("./notes/notes.router");

app.use(express.json());

// # 5 In src/app.js, attach the notes router using app.use("/notes", notesRouter

app.use("/notes", notesRouter);

// Not-found handler
app.use((req, res, next) => {
  next({
    status: 404,
    message: `Not found: ${req.originalUrl}`
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const {
    status = 500,
    message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
