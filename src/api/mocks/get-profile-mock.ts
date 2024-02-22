import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-id',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1199999999',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
