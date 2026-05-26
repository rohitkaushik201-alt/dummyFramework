import { json } from 'node:stream/consumers'
import { loginpagelocators } from '../locators/locators'

class loginPage {
    constructor(page) {
        this.page = page
        this.locators = new loginpagelocators(page)
    }
    async login(username, password) {
        await this.locators.username.fill(username)
        await this.locators.password.fill(password)
        await this.locators.loginButton.click()
    }
}
export default loginPage