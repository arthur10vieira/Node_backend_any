const { Router } = require('express');

const router = Router();

/**
 * Rota de health check
 * Usada para saber se a API está online
 */
router.get('/health', (req, res) => {
    return res.status(200).json({
        status: 'ok',
        message: "Api está funcional",
        uptime: process.uptime(),
    });
});

module.exports = router;