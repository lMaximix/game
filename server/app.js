require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT ?? 5000;
const questionsRouter = require('./routes/api/questions.routes');
const serverConfig = require('./config/serverConfig');

// config
serverConfig(app);

// routing
app.use('/api/questions', questionsRouter);

try {
  app.listen(PORT, () => {
    console.log(`*** Server started at ${PORT} port ***`);
  });
} catch (error) {
  console.log(error.message);
}
