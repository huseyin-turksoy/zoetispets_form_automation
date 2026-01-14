import{test, expect} from '@playwright/test';


test('filling the pets reminder form', async ({ page }) => {
  await page.goto('https://stage-zoetispets.cphostaccess.com/en-gb/prescriptions/apoquel/');
  //await page.waitForLoadState('networkidle');

  for(let i=0; i<2; i++){

    if (await page.locator('button[id="onetrust-accept-btn-handler"]').isVisible()) {
  await page.locator('button[id="onetrust-accept-btn-handler"]').click();
  break;
  }else{
    await page.waitForTimeout(3000);
  }

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
  await page.locator('.medication-reminder__button').click();
  await expect(page.getByRole('heading', { name: 'Thank you for setting up your' })).toBeVisible();
});