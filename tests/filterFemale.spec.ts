import { test, expect } from '@playwright/test';

test('Фильтрация по полу (Female)', async ({ page }) => {
    await page.goto('http://localhost:3000/');
  
    // Дожидаемся появления селектора (фильтра)
    const filter = page.locator('[data-testid="gender-filter"]');
    await filter.waitFor({ state: 'visible', timeout: 10000 });
  
    await filter.click(); 
    await page.selectOption('[data-testid="gender-filter"]', 'female'); 

    await page.waitForTimeout(2000);
    await filter.click(); 
    const femaleCharacters = await page.locator('a[href^="/character/character/"]').count();
    expect(femaleCharacters).toBeGreaterThan(0);
  
    console.log(`✅ Проверено ${femaleCharacters} персонажей с полом "female"`);
  });