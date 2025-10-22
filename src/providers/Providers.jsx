// src/providers/Providers.jsx
import { Suspense } from 'react'
import { StateProvider } from './StateProvider'
import { ValidationProvider } from './ValidationProvider'

import Loading from '@/app/loading'

export default function Providers({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <ValidationProvider>
        <StateProvider>{children}</StateProvider>
      </ValidationProvider>
    </Suspense>
  )
}
