module.exports = (req, res) => {
    return res.status(404).json({
        status: 'error',
        message: 'Rota não encontrada',
    });
};