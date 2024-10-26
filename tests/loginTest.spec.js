const {test, expect} = require('@playwright/test');
const login = require('../utils/loginUtils');
const DashboardPage = require('../pages/dashboardPage');

const env = process.env.ENV || 'qa';

test.describe(`${env.toUpperCase()} Environment Tests`, () => {
    test.beforeEach(async ({page}) => {
        await login(page);
    });

    test(`TC1 | should login and navigate to the dashboard in ${env.toUpperCase()} environment`, async ({page},testInfo) => {
        
        testInfo.annotations.push({ type: 'test_id', description: 'TC1' });
        
        const dashboardPage = new DashboardPage(page);
        const dashBoardUserName = await dashboardPage.getDashboardUserName();
        expect(dashBoardUserName.trim()).toBe('Chathumal Dissanayaka');
    });
});
