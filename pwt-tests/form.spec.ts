import { test, expect } from '@playwright/test';

test('should not show review form to an unauthorized user', async ({ page }) => {
    await page.goto('./');

    await page.locator('.cities__card').first().click();
    await expect(page.locator('.reviews__form')).not.toBeVisible();
});

test('should show review form to an authorized user', async ({ page }) => {
    await page.goto('./login');

    await page.fill('input[name=email]', 'test@mail.com');
    await page.fill('input[name=password]', 'admin1');
    await page.click('button[type=submit]');
    await page.waitForURL('./');

    await page.locator('.cities__card').first().click();

    await page.waitForSelector('.offer__gallery');
    await expect(page.locator('.reviews__form')).toBeVisible();
});

test('should send form by authorized user', async ({ page }) => {
    await page.goto('./login');

    await page.fill('input[name=email]', 'test@mail.com');
    await page.fill('input[name=password]', 'admin1');
    await page.click('button[type=submit]');
    await page.waitForURL('./');

    await page.locator('.cities__card').first().click();

    await page.waitForSelector('.offer__gallery');
    await expect(page.locator('.reviews__form')).toBeVisible();

    const numReviews = await page.locator('.reviews__info').count()

    const reviewText = `
    I stayed in room number 407 and it was fantastic!
    The room was spacious and modern with a comfortable king-sized bed and a large flat-screen TV.
    The view from the window of the city skyline was breathtaking.
    Highly recommend this place for anyone visiting the city!
    `
    await page.locator('form svg').nth(2).click();
    await page.fill('[name="review"]', reviewText);

    await Promise.all([
        page.waitForResponse(
            (response) => response.url().includes('/comments') && response.status() === 201
        ),
        page.click('button[type="submit"]')
    ]);

    await page.waitForSelector('.offer__gallery');

    await expect(page.locator('.reviews__info')).toHaveCount(Math.min(numReviews + 1, 10));
    await expect(page.locator('.reviews__text').first()).toHaveText(reviewText)

});
