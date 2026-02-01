import { test, expect } from '@playwright/test';

const urls = [
  'https://zoetispets.com/fr-ca/chien-soins/dermatologie-evaluation/',
  'https://zoetispets.com/en-ca/dog-healthcare/skin-conditions-assessment/',
  'https://zoetispets.com/en-au/dog-healthcare/skin-conditions-assessment/',  
  'https://zoetispets.com/de-de/hund-gesundheit/juckreiz-test/',
  'https://zoetispets.com/es-es/perro-salud/problemas-de-piel-evaluacion/',
  'https://zoetisetcompagnie.com/fr-fr/sante-du-chien/dermatologie-evaluation/',
  'https://zoetispets.com/it-it/salute-cane/segni-di-problemi-cutanei-risultato/',
  'https://zoetispets.com/pl-pl/ochrona-zdrowia-psa/choroby-skory-u-psa-ocena/',
  'https://zoetispets.com/en-gb/dog-healthcare/skin-conditions-assessment/',
  'https://zoetispets.com/pt-br/cuidados-caninos/avaliacao-de-condicoes-de-pele/'
];

urls.forEach((url) => {

    test('filling the dog derm form for ' + url, async ({ page }) => {

  await page.goto(url);
  //await page.waitForLoadState('networkidle');

  for(let i=0; i<2; i++){

    if (await page.locator('button[id="onetrust-accept-btn-handler"]').isVisible()) {
  await page.locator('button[id="onetrust-accept-btn-handler"]').click();
  break;
  }else{
    await page.waitForTimeout(3000);
  }

  }


  const ipPopupClose = page.locator('[class="ip-tracking-popup__close"]');

  if (await ipPopupClose.isVisible()) {
  await ipPopupClose.click();
  } else{
    console.log('IP popup not visible');
  }

  
  expect(await page.locator('[class="assessment__symtoms-grid"]').first().isVisible());

  await page.locator('[class*="assessment-checkbox-sky"]').nth(2).click();
  await page.locator('[class*="assessment-checkbox-sky"]').nth(3).click();
  //await page.locator('[class*="assessment-checkbox-sky"]').nth(10).click();
  //await page.locator('[class*="assessment-checkbox-sky"]').nth(11).click();
  await page.locator('[data-tracker-identifier="questionnaire"]').click();
  expect(await page.locator('[for="skinProblemsY"]')).toBeVisible();
  await page.locator('[for="skinProblemsY"]').click();
  await page.locator('[for="medicationY"]').click();
  await page.locator('#Pet_Name').first().fill('Test Dog Name');
  await page.locator('[class="dropdown-trigger"]').first().click();
  await page.locator('li[class="dropdown-item select-option"]').first().click();
  await page.locator('#email_select').first().fill('test.dogskin@yopmail.com');
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

  await console.log('Dog Derm Form submitted successfully and results are visible for = '+ url);  


});
});
