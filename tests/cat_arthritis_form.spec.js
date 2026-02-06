import { test, expect } from '@playwright/test';

const urls = [
  'https://zoetispets.com/en-gb/cat-healthcare/arthritis-quiz/',
  'https://zoetispets.com/en-au/cat-healthcare/arthritis-quiz/',
  'https://zoetispets.com/en-ca/cat-healthcare/arthritis-quiz/',  
  'https://zoetispets.com/de-de/katze-gesundheit/arthrose-quiz/',
  'https://zoetispets.com/es-es/gato-salud/artrosis-quiz/',
  'https://www.zoetisetcompagnie.com/fr-fr/sante-du-chat/arthrose-quiz/',
  'https://zoetispets.com/it-it/salute-gatto/dolore-articolare-quiz/',
  'https://zoetispets.com/pl-pl/ochrona-zdrowia-kota/artretyzm-quiz/',
  'https://zoetispets.com/fr-ca/chat-soins/arthrose-quiz/'
];

urls.forEach((url) => {

    test('filling the cat arthritis form for ' + url, async ({ page }) => {

  await page.goto(url);
  //await page.waitForLoadState('networkidle');

  for(let i=0; i<2; i++){

    if (await page.locator('button[id="onetrust-accept-btn-handler"]').isVisible()) {
  await page.locator('button[id="onetrust-accept-btn-handler"]').first().click();
  break;
  }else if (await page.locator('.onetrust-close-btn-handler').first().isVisible()) {
    await page.locator('.onetrust-close-btn-handler').first().click();    
  }else{
    await page.waitForTimeout(3000);
  }

  }


  await page.locator('[class="ip-tracking-popup__close"]').click();
/*
  if (await ipPopupClose.isVisible()) {
  
  } else{
    console.log('IP popup not visible');
  }*/

  
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
  await page.locator('span[class="checkmark"]').nth(4).click();
  await page.locator('span[class="checkmark"]').nth(5).click();
  await page.locator('[type="submit"]').click();

  if(await page.locator('picture').first().isVisible()){
    expect(await page.locator('picture').first()).toBeTruthy();
    await console.log('Result Pictures are visible');
  }else{
    expect(await page.locator('video').first()).toBeTruthy();
    await console.log('Result Videos are visible');
  }
  
  await console.log('Cat Arthritis Form submitted successfully and results are visible for = '+ url);  


});

});
