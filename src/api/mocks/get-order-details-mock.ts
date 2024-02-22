import { http, HttpResponse } from 'msw'

import {
  GerOrderDetailsResponse,
  GetOrderDetailsParams,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GerOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: `Customer ${params.orderId}`,
      email: 'johndoe@example.com',
      phone: '+5511999999999',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Pepperoni' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 1000,
        product: { name: 'Pizza Pepperoni' },
        quantity: 2,
      },
    ],
    totalInCents: 3000,
  })
})
