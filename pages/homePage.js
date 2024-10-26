class HomePage {
    constructor(page) {
        this.page = page;
        this.appLogo = "//div[@class='app_logo']";
    }

    async getAppLogoName() {
        return await this.page.textContent(this.appLogo);
    }
}

module.exports = HomePage;
