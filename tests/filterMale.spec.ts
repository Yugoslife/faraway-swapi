import { test, expect } from '@playwright/test';

test('Фильтрация по полу (Male)', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Дожидаемся появления селектора (фильтра)
  const filter = page.locator('[data-testid="gender-filter"]');
  await filter.waitFor({ state: 'visible', timeout: 10000 });

  await filter.click(); 
  await page.selectOption('[data-testid="gender-filter"]', 'male'); // Выбираем "Male"

  await page.waitForTimeout(2000);
  await filter.click(); 
  const maleCharacters = await page.locator('a[href^="/character/character/"]').count();
  expect(maleCharacters).toBeGreaterThan(0);

  console.log(`✅ Проверено ${maleCharacters} персонажей с полом "male"`);
});
