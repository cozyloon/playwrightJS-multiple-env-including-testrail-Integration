class DashboardPage {
    constructor(page) {
        this.page = page;
        this.dashboardUsername = "//span[@class='navbar-brand ng-binding']";
    }

    async getDashboardUserName() {
        return await this.page.textContent(this.dashboardUsername);
    }
}

module.exports = DashboardPage;
