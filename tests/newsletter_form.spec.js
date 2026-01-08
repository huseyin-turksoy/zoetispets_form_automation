import{test, expect} from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stage-zoetispets.cphostaccess.com/en-gb/blog/dog/how-often-do-dogs-go-to-vet/');
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

  //wait for form appearance
  const form = page.getByRole('textbox', { name: 'Your email' });
  await expect(form).toBeVisible({
  timeout: 34_000
   });

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
  expect(await page.getByRole('heading', { name: 'You’ve successfully joined' }).isVisible).toBeTruthy();


});