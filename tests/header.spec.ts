import { test, expect } from '@playwright/test';

test('Проверка заголовка на странице', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('h1')).toHaveText('Characters');
});