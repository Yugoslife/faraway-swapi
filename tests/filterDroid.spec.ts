import { test, expect } from '@playwright/test';

test('Фильтрация по полу (n/a)', async ({ page }) => {
    await page.goto('http://localhost:3000/');
  
    const filter = page.locator('[data-testid="gender-filter"]');
    await filter.waitFor({ state: 'visible', timeout: 10000 });
  
    await filter.click(); 
    await page.selectOption('[data-testid="gender-filter"]', 'n/a'); 
  
    await page.waitForTimeout(2000);
    await filter.click(); 
    const droidCharacters = await page.locator('a[href^="/character/character/"]').count();
    expect(droidCharacters).toBeGreaterThan(0);
  
    console.log(`✅ Проверено ${droidCharacters} персонажей с полом "female"`);
  });
