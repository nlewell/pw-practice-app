import {test} from '@playwright/test';

test('This is the title',async ({page})=>{
    //'page' fixture. It is the blank page or new page of the browser
    await page.goto('https://localhost:4200/')
});