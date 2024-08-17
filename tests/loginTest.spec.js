const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const DashboardPage = require('../pages/dashboardPage');

const env = process.env.ENV || 'qa';

test.describe(`${env.toUpperCase()} Environment Tests`, () => {
    test.beforeEach(async ({page}) => {
        // Any setup steps before each test can go here
    });

    test(`should login and navigate to the dashboard in ${env.toUpperCase()} environment`, async ({page}) => {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await loginPage.navigate();
        await loginPage.login();

        // Assert dashboard username
        const dashBoardUserName = await dashboardPage.getDashboardUserName();
        expect(dashBoardUserName.trim()).toBe('Chathumal Dissanayaka');
    });
});
