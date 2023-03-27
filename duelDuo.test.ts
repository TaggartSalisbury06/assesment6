
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
   await driver.get('http://localhost:4000/')
})

afterAll(async () => {
    await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
describe('Robots functionality', () => {
    it('draws robot cards', async () => {
        await driver.findElement(By.id('draw')).click()
    })
    it('duels robot cards', async () => {
        await driver.findElement(By.id('duel')).click()
    })
})
