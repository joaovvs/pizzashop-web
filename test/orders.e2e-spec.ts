import { expect, test } from '@playwright/test'

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()
  expect(page.getByRole('cell', { name: 'Customer 10' })).toBeVisible()
})

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Próxima página' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 11', exact: true }),
  ).toBeVisible()
  expect(page.getByRole('cell', { name: 'Customer 20' })).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 51', exact: true }),
  ).toBeVisible()
  expect(page.getByRole('cell', { name: 'Customer 60' })).toBeVisible()

  await page.getByRole('button', { name: 'Página anterior' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 41', exact: true }),
  ).toBeVisible()
  expect(page.getByRole('cell', { name: 'Customer 50' })).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()
  expect(page.getByRole('cell', { name: 'Customer 10' })).toBeVisible()
})

test('filter by orderId', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('ID do pedido').fill('order-30')

  await page.locator('form').getByRole('button').first().click()

  expect(page.getByRole('cell', { name: 'order-30' })).toBeVisible()

  await page.waitForTimeout(1000)
})

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Nome do Cliente').fill('Customer 30')

  await page.locator('form').getByRole('button').first().click()

  expect(page.getByRole('cell', { name: 'Customer 30' })).toBeVisible()
})

test('filter by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()
  await page.getByLabel('Em entrega').getByText('Em entrega').click()

  await page.locator('form').getByRole('button').first().click()

  const tableRows = await page.getByRole('cell', { name: 'Em entrega' }).all()

  expect(tableRows).toHaveLength(10)

  await page.waitForTimeout(1000)
})
