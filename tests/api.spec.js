import {test,expect} from '@playwright/test'
const baseAPIURL = 'https://restful-booker.herokuapp.com/auth'
test('API test for auth endpoint', async ({request})=> {
    const startTime = Date.now()
    const response = await request.post(baseAPIURL, {
        data: {
            "username": "admin",
            "password": "password123"
        }
    }
);
const endTime = Date.now()
const responseTime = endTime - startTime
expect(response.status()).toBe(200)
console.log(`Response time: ${responseTime} ms`)
expect(responseTime).toBeLessThan(2000)
// expect(response.time()).toBeLessThan(2000)
const responseBody = await response.json()
console.log(responseBody)
expect(responseBody).toHaveProperty('token')

})

test('API test for auth endpoint with invalid credentials', async ({request})=> {
    const response = await request.post(baseAPIURL, {
        data: {
            "username": "invalid",
            "password": "invalid"
        }
    });
    console.log(`Response status: ${response.status()}`)
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    console.log(responseBody)
    expect(responseBody).toHaveProperty('reason')
    expect(responseBody.reason).toBe('Bad credentials')
});


test('API test for auth endpoint with missing fields', async ({request})=> {
    const response = await request.post(baseAPIURL, {
        data: {
            "username": "admin"
        }
    });
    console.log(`Response status: ${response.status()}`)
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    console.log(responseBody)
    expect(responseBody).toHaveProperty('reason')
    expect(responseBody.reason).toBe('Bad credentials')
});
