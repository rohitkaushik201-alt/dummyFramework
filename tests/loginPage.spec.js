import { test, expect } from '@playwright/test';
import loginPage from "../pages/loginpage";
const testdata = JSON.parse(JSON.stringify(require('../testdata.json')))
const baseURL = 'https://practice.expandtesting.com/login'
for (const data of testdata) {
    test(`Login test for ${data.username}`, async ({ page })=> {
        const login = new loginPage(page)
        await page.goto(baseURL)
        await login.login(data.username, data.password);
        if (data.type === "valid") {
            await expect(page.getByText('You logged into a secure area!', { exact: true })).toBeVisible()
        }else{
            await expect(page.getByText('Your password is invalid!', { exact: true }))
        }
    })

}

