import { test } from '@playwright/test';

const getFavoriteCount = async (page) => parseInt(await page.locator('.header__favorite-count').textContent()|| '0');

const checkCount = async (page, count) => {
    await page.waitForFunction((toBe) => 
        +document.querySelector('.header__favorite-count')?.innerHTML!! === toBe, 
        count, 
        { timeout: 5000}
    );
};

const checkIfFavoriteWasRemoved = async (page, countToBe) => {
    await checkCount(page, countToBe);
    await page.locator('.header__favorite-count').click();
    await page.waitForURL('./favorites');
    await page.waitForFunction(() => document.querySelector('.place-card__name') === null, {} , { timeout: 1000 });
    await page.goto('./');
};

const checkIfFavoriteWasAdded = async (page, countToBe, nameToBe) => {
    await checkCount(page, countToBe);
    await page.locator('.header__favorite-count').click();
    await page.waitForURL('./favorites');
    await page.waitForFunction((name) => document.querySelector('.place-card__name')
        ?.querySelector('a')?.innerHTML === name, nameToBe, { timeout: 1000 });
    await page.goto('./');
};

function getRandomInt() {
    const min = Math.ceil(0);
    const max = Math.floor(1e6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const login = async (page) => {
    await page.goto('http://localhost:5173/');
    await page.getByText('Sign in').click();
    await page.getByPlaceholder('Email').click();
    const dateNow = Date.now();
    await page.getByPlaceholder('Email').fill(`${dateNow}${getRandomInt()}${getRandomInt()}@mail.com`);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin1');
    await page.getByPlaceholder('Password').press('Enter');
    await page.waitForURL('./');
    
    const cookies = await page.context().cookies();
    console.log(cookies);
  };  

test('should add and remove favorite from main page if user is authorized', async ({ page }) => {
    await login(page);
  
    const favoriteCount = await getFavoriteCount(page);
    const card = await page.locator('.cities__card').first();
    const button = await card.locator('.place-card__bookmark-icon');
    const name = await card.locator('.place-card__name').locator('a').innerText();
  
    await button.click();
    await checkIfFavoriteWasAdded(page, favoriteCount + 1, name);
  
    await button.click();
    await checkIfFavoriteWasRemoved(page, favoriteCount);
  });  

test('should add and remove favorite from offer page if user is authorized', async ({ page }) => {
    await login(page);

    const favoriteCount = await getFavoriteCount(page);
    const card = await page.locator('.cities__card').first();
    const name = await card.locator('.place-card__name').locator('a').innerText();

    await card.click();
    await page.waitForSelector('.offer__wrapper', { timeout: 10000 });
    const offerWrapper = page.locator('.offer__wrapper');
    await offerWrapper.locator('.place-card__bookmark-icon').click();

    await checkIfFavoriteWasAdded(page, favoriteCount + 1, name);

    await card.click();
    await page.waitForSelector('.offer__wrapper', { timeout: 10000 });
    await offerWrapper.locator('.place-card__bookmark-icon').click();
    
    await checkIfFavoriteWasRemoved(page, favoriteCount);
});

test('should add and remove favorite from offer page nearby offers if user is authorized', async ({ page }) => {
    await login(page);

    const favoriteCount = await getFavoriteCount(page);
    const card = await page.locator('.cities__card').first()

    await card.click();
    await page.waitForSelector('.near-places__card', { timeout: 10000 });
    const nearPlaces = page.locator('.near-places__card').first();
    await nearPlaces.locator('.place-card__bookmark-icon').click();
    const name = await nearPlaces.locator('.place-card__name').locator('a').innerText();

    await checkIfFavoriteWasAdded(page, favoriteCount + 1, name);
    
    await card.click();
    await page.waitForSelector('.near-places__card', { timeout: 10000 });
    await nearPlaces.locator('.place-card__bookmark-icon').click();
    
    await checkIfFavoriteWasRemoved(page, favoriteCount);
});

test('should remove favorite from favorite page', async ({ page }) => {
    await login(page);

    const favoriteCount = await getFavoriteCount(page);
    const card = await page.locator('.cities__card').first();

    await card.click();
    await page.waitForSelector('.near-places__card', { timeout: 10000 });
    const nearPlaces = page.locator('.near-places__card').first();
    await nearPlaces.locator('.place-card__bookmark-icon').click();
    const name = await nearPlaces.locator('.place-card__name').locator('a').innerText();

    await checkIfFavoriteWasAdded(page, favoriteCount + 1, name);
    
    await page.locator('.header__favorite-count').click();
    const favoriteCard = await page.locator('.favorites__card').first();
    await favoriteCard.locator('.place-card__bookmark-icon').click();
    await checkIfFavoriteWasRemoved(page, favoriteCount);
});
