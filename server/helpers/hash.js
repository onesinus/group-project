const bcrypt = require('bcryptjs');

function hash(plain_text, salt_total = 10) {
    const salt = bcrypt.genSaltSync(salt_total);
    const hash = bcrypt.hashSync(plain_text, salt);
    return hash;
}

function isAuthorized(plain, hashed) {
    return bcrypt.compareSync(plain, hashed);
}

module.exports = {
    hash,
    isAuthorized
}