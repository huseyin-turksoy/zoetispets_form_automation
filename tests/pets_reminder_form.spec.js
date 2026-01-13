import{test, expect} from '@playwright/test';


test('filling the pets reminder form', async ({ page }) => {
  await page.goto('https://stage-zoetispets.cphostaccess.com/en-gb/prescriptions/apoquel/');
  await page.waitForLoadState('networkidle');

  const cookieBtn = page.locator('button[id="onetrust-accept-btn-handler"]');

  if (await cookieBtn.isVisible()) {
  await cookieBtn.click();
  }else{
    console.log('Cookie button not visible');
  }

  await page.getByRole('button', { name: 'Yes, I have an Apoquel' }).click();


  const ipPopupClose = page.locator('[class="ip-tracking-popup__close"]');

  if (await ipPopupClose.isVisible()) {
  await ipPopupClose.click();
  } else{
    console.log('IP popup not visible');
  }
  
  await page.getByRole('button', { name: 'Set Apoquel Reminder' }).click();
  await page.getByRole('textbox', { name: 'Please Enter Your Email' }).click();
  await page.getByRole('textbox', { name: 'Please Enter Your Email' }).fill('pets.reminder@yopmail.com');
  await page.getByRole('textbox', { name: 'Dog Name *' }).click();
  await page.getByRole('textbox', { name: 'Dog Name *' }).fill('test dog');
  await page.getByRole('textbox', { name: 'Dog Breed *' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Other' }).click();
  await page.getByRole('textbox', { name: 'Last Administration Date*' }).fill('2026-01-05');
  await page.locator('.checkmark').first().click();
  await page.locator('astro-checkbox:nth-child(5) > .checkbox-wrapper > .checkbox-container > .checkmark').click();
  await page.getByRole('button', { name: 'Set Up Medication Reminder' }).click();
  expect(await page.getByRole('heading', { name: 'Thank you for setting up your' }).isVisible()).toBeTruthy();
});