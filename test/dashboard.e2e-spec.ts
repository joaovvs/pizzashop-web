import { expect, test } from '@playwright/test'

test('display day order amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('20', { exact: true })).toBeVisible()
  await expect(page.getByText('-5% em relação a ontem')).toBeVisible()
})

test('display month order amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('200').first()).toBeVisible()
  await expect(
    page
      .locator('div')
      .filter({ hasText: /^Pedidos \(mês\)200\+7% em relação ao mês passado$/ })
      .getByRole('paragraph'),
  ).toBeVisible()
})

test('display month canceled order amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('200').nth(1)).toBeVisible()
  await expect(
    page
      .locator('div')
      .filter({
        hasText: /^Cancelamentos \(mês\)200\+7% em relação ao mês passado$/,
      })
      .getByRole('paragraph'),
  ).toBeVisible()
})

test('display month revenue order amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('R$ 20,00')).toBeVisible()
  await expect(page.getByText('+10% em relação ao mês passado')).toBeVisible()
})
