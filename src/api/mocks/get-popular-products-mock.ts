import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'produto A', amount: 50 },
    { product: 'produto B', amount: 2000 },
    { product: 'produto C', amount: 100 },
    { product: 'produto D', amount: 300 },
    { product: 'produto E', amount: 400 },
    { product: 'produto F', amount: 1000 },
  ])
})
