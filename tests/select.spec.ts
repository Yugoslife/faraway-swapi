import { test, expect } from '@playwright/test';

test('Проверка количества опций в селекте', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Проверяем, что селект с data-testid="gender-filter" содержит 4 опции
  const options = await page.locator('[data-testid="gender-filter"] option').count();
  expect(options).toBe(4);  // "All Genders", "Male", "Female", "Droid"
});
