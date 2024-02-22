import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-id',
    name: 'Pizza shop',
    description: 'Custom restaurant description.',
    managerId: 'custom-manager-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
