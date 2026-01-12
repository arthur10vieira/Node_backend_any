require('dotenv').config();
require('./config/env');

const app = require('./app');
const env = require('./config/env');

app.listen(env.PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${env.PORT}`);
});