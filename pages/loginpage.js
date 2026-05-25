import { json } from 'node:stream/consumers'
import { loginpagelocators } from '../locators/locators'

class loginPage {
    constructor(page) {
        this.page = page
        this.locators = new loginpagelocators(page)
    }
    async login(username, password) {
        await this.page.locator(this.locators.username).fill(username)
        await this.page.locator(this.locators.password).fill(password)
        await this.page.locator(this.locators.loginButton).click()
    }
}
export default loginPage