const config = require('../config.json');
const jwt = require('jsonwebtoken');

const users = [{username: 'admin', password: 'pass'}]

async function authenticate ({username, password}) {
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) 
        throw 'Username or password incorrect';

    const token = jwt.sign({sub: user.id}, config.secret, {expiresIn: '7d'});

    return {
        ...omitPassword(user),
        token
    };
}

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}


module.exports = {authenticate};