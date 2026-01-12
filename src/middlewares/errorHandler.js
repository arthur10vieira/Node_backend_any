module.exports = (error, req, res, next) => {
    console.error(error);

    return res.status(error.status || 500).json({
        status: 'error',
        message: error.message || 'Erro interno do servidor',
    });
};