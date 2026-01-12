module.exports = {
    success(res, data, status = 200) {
        return res.status(status).json({
            status: 'success',
            data,
        });
    },

    error(res, message, status = 400) {
        return res.status(status).json({
            status: 'error',
            message,
        });
    },
};