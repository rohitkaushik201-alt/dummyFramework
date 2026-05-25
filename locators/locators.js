export class loginpagelocators {
    constructor(page) {
        this.username = page.getByRole('textbox', { name: 'Username' })
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.loginbutton = page.getByRole('button', { name: 'Login' })
    }
}