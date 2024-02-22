import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getMonthRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount'
import { getMonthRevenueMock } from './get-month-revenue'
import { getMonthCanceledOrdersAmountMock } from './get-mounth-canceled-order-amount-mock'
import { getMonthOrdersAmountMock } from './get-mounth-order-amount-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { registerRestaurantInMock } from './register-restaurant-mock copy'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantInMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDayOrdersAmountMock,
  getPopularProductsMock,
  getMonthRevenueInPeriodMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
