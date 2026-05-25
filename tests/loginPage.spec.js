import { test, expect } from '@playwright/test';
import loginPage from "../pages/loginpage";
const testdata = JSON.parse(JSON.stringify(require('../testdata.json')))
const baseURL = 'https://practice.expandtesting.com/login'
test('Login test', async ({ page })=> {
    const login = new loginPage(page)
    await page.goto(baseURL)
    await login.login(testdata.username, testdata.password)
    expect(page.getByText('You logged into a secure area!', { exact: true })).toBeVisible()
})

