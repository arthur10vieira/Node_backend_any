const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const corsOptions = require('./config/cors');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');

const routes = require('./routes');

const app = express();

// Segurança
app.use(helmet());
app.use(cors(corsOptions));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

// JSON
app.use(express.json());

// Rotas
app.use('/api', routes);

app.use(notFound)
app.use(errorHandler)

module.exports = app;