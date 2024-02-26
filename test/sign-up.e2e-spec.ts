import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do Estabelecimento').fill('Pizza shop')
  await page.getByLabel('Seu Nome').fill('John Doe')
  await page.getByLabel('Seu email').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('7199999999')

  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso.')
  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})
test('sign with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do Estabelecimento').fill('Wrong name')
  await page.getByLabel('Seu Nome').fill('John Doe')
  await page.getByLabel('Seu email').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('7199999999')

  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar estabelecimento')
  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer Login' }).click()

  expect(page.url()).toContain('/sign-in')

  await page.waitForTimeout(2000)
})
