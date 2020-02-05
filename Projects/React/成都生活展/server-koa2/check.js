const jwt = require('jsonwebtoken');

function create() {
    return jwt.sign(payload, secret, SingOptions);
}


function check(req, secret) {
    let token = req.body.token || req.query.token || req.headers['authorization'];

}

module.exports = {
    create,
    check
}

