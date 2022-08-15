const login = (req, res = response) => {

    res.json({
        msj: 'Login ok'
    })
}

module.exports = {
    login
}