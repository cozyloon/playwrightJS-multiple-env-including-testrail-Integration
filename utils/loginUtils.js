const LoginPage = require('../pages/loginPage');

async function login(page) {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;
    await loginPage.login(username, password);
}

module.exports = login;
