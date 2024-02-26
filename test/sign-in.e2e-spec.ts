import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu Email').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText(
    'Enviamos um link de autenticação para o seu e-mail.',
  )
  await expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu Email').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Credenciais inválidas')
  await expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})
test('navigate to new restaurante page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo Estabelecimento' }).click()

  await expect(page.url()).toContain('/sign-up')

  await page.waitForTimeout(2000)
})
