import { test, expect } from '@playwright/test';

const urls = [
  'https://stage-zoetispets.cphostaccess.com/en-gb/cat-healthcare/arthritis-quiz/',
  'https://stage-zoetispets.cphostaccess.com/en-au/cat-healthcare/arthritis-quiz/',
  'https://stage-zoetispets.cphostaccess.com/en-ca/cat-healthcare/arthritis-quiz/',  
  'https://stage-zoetispets.cphostaccess.com/de-de/katze-gesundheit/arthrose-quiz/',
  'https://stage-zoetispets.cphostaccess.com/es-es/gato-salud/artrosis-quiz/',
  'https://stage-zoetispets.cphostaccess.com/fr-fr/sante-du-chat/arthrose-quiz/',
  'https://stage-zoetispets.cphostaccess.com/it-it/salute-gatto/dolore-articolare-quiz/',
  'https://stage-zoetispets.cphostaccess.com/pl-pl/ochrona-zdrowia-kota/artretyzm-quiz/',
  'https://stage-zoetispets.cphostaccess.com/fr-ca/chat-soins/arthrose-quiz/'
];

urls.forEach((url) => {

    test('filling the cat arthritis form for ' + url, async ({ page }) => {

  await page.goto(url);
  await page.waitForLoadState('networkidle');

  const cookieBtn = page.locator('button[id="onetrust-accept-btn-handler"]');

  if (await cookieBtn.isVisible()) {
  await cookieBtn.click();
  }else{
    console.log('Cookie button not visible');
  }


  const ipPopupClose = page.locator('[class="ip-tracking-popup__close"]');

  if (await ipPopupClose.isVisible()) {
  await ipPopupClose.click();
  } else{
    console.log('IP popup not visible');
  }

  
  expect(await page.locator('[class="assessment__symtoms-grid"]').first().isVisible());

  await page.locator('[class*="assessment-checkbox-purple"]').nth(2).click();
  await page.locator('[class*="assessment-checkbox-purple"]').nth(3).click();
  await page.locator('[class*="assessment-checkbox-purple"]').nth(9).click();
  await page.locator('[class*="assessment-checkbox-purple"]').nth(10).click();
  await page.locator('[data-tracker-identifier="questionnaire"]').click();
  expect(await page.locator('[for="arthritisY"]')).toBeVisible();
  await page.locator('[for="arthritisY"]').click();
  await page.locator('[for="medicationY"]').click();
  await page.locator('#Pet_Name').first().fill('Test Cat Name');
  //await page.locator('[class="dropdown-trigger"]').first().click();
  //await page.locator('li[class="dropdown-item select-option"]').first().click();
  await page.locator('#email_select').first().fill('test.cat@yopmail.com');
  await page.locator('[for="consent1"]').click();
  await page.locator('span[class="checkmark"]').nth(5).click();
  await page.locator('[type="submit"]').click();
  await expect(page.locator('picture').first()).toBeVisible();
  await expect(page.locator('picture').nth(1)).toBeVisible();
  await console.log('Cat Arthritis Form submitted successfully and results are visible for = ${url}');  
  //hello


});

});
