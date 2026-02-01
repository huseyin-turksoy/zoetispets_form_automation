import{test, expect} from '@playwright/test';

const url = 'https://zoetispets.com/en-gb/blog/dog/how-often-do-dogs-go-to-vet/';

test('newsletter_form '+ url, async ({ page }) => {
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

  //dynamic wait for form appearance
    let retries = 0;
  const maxRetries = 11; // 11 x 3 saniye = 33 saniye max
  
  while (retries < maxRetries) {
    if (await page.getByRole('textbox', { name: 'Your email' }).isVisible()) {
      break;
    }
    await page.waitForTimeout(3000);
    retries++;
  }

  
  /*const form = page.getByRole('textbox', { name: 'Your email' });
  await expect(form).toBeVisible({
  timeout: 34_000
   });*/

  await page.getByRole('textbox', { name: 'Your email' }).click();
  await page.getByRole('textbox', { name: 'Your email' }).fill('newsletter.test@yopmail.com');
  await page.getByRole('textbox', { name: 'Dog Name *' }).click();
  await page.getByRole('textbox', { name: 'Dog Name *' }).fill('test dog');
  await page.getByRole('textbox', { name: 'And what\'s your dog\'s breed?' }).click();
  await page.locator('#newsletter').getByText('Other', { exact: true }).click();
  await page.locator('.checkmark').first().click();
  await page.locator('div:nth-child(6) > .selector-group > .assessment-input-group-row > div > .selector-container > .checkmark').first().click();
  await page.locator('.checkbox-container > .checkmark').first().click();
  await page.locator('div:nth-child(8) > astro-checkbox > .checkbox-wrapper > .checkbox-container > .checkmark').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading', { name: 'You’ve successfully joined' })).toBeVisible();


});