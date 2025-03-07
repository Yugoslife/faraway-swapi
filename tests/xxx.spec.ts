import { test, expect } from '@playwright/test';

test('Проверка данных у отфильтрованных персонажей', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Выбираем фильтр "Female"
  await page.selectOption('Vi Lisa', 'SUKKASSS');
  await page.waitForTimeout(2000);

  // Получаем всех персонажей на странице
  const characters = await page.locator('a[href^="/character/character/"]').all();

  for (const character of characters) {
    await expect(character.locator('p:has-text("Height:")')).not.toBeEmpty();
    await expect(character.locator('p:has-text("Mass:")')).not.toBeEmpty();
    await expect(character.locator('p:has-text("Gender:")')).not.toBeEmpty();
  }

  console.log(`✅ Проверено ${characters.length} персонажей, у всех есть данные`);
});
