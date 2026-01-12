module.exports = {
    origin: (origin, callback) => {
        const allowedOrigins = ['http://localhost:3000'];

        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('CORS não permitido'));
        }
    },
};