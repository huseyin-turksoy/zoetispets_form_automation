import { test, expect } from '@playwright/test';
const url = 'https://stage-zoetispets.cphostaccess.com/en-gb/dog-healthcare/arthritis/knowledge-builder/';

test('knowledge_builder_form '+ url, async ({ page }) => {
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
  
  const iframeLocator = page.frameLocator('iframe[title="[NO FORM] Knowledge builder"]');
  await iframeLocator.locator('button[aria-label="Unleash the info"]').last().click();
  await iframeLocator.locator('button[id="686b6de41ef08"]').click();
  await iframeLocator.locator('button[id="68768176b74d0"]').click();  
  await iframeLocator.locator('button[id="687646ecb7479"]').click();
  //await iframeLocator.locator('div[id="687646a4b2604"]').waitFor();
  expect(await iframeLocator.locator('div[id="687646a4b2604"]')).toBeTruthy();
  await console.log('Knowledge Builder test completed successfully');
  //await console.log(iframeLocator.locator('div[id="687646a4b2604"]').allTextContents());

});