const { z } = require('zod');

const envSchema = z.object({
    PORT: z.string().default('3000'),

    DB_HOST: z.string(),
    DB_USER: z.string(),
    DB_PASS: z.string(),
    DB_NAME: z.string(),
    DB_DIALECT: z.string(),

    JWT_SECRET: z.string(),
    JWT_EXPIRES_IN: z.string(),
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
    console.error('❌ Variáveis de ambiente inválidas', env.error.format());
    process.exit(1);
}

module.exports = env.data;