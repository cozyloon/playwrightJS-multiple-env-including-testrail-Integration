const {test, expect} = require('@playwright/test');
const login = require('../utils/loginUtils');
const HomePage = require('../pages/homePage');

const env = process.env.ENV || 'qa';

test.describe(`${env.toUpperCase()} Environment Tests`, () => {
    test.beforeEach(async ({page}) => {
        await login(page);
    });

    test(`TC1 | should login and navigate to the dashboard in ${env.toUpperCase()} environment`, async ({page},testInfo) => {
        
        testInfo.annotations.push({ type: 'test_id', description: 'TC1' });
        
        const homePage = new HomePage(page);
        const appLogo = await homePage.getAppLogoName();
        expect(appLogo.trim()).toBe('Swag Lab');
    });
});
