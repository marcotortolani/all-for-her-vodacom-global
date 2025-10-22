// src/providers/ValidationProvider.jsx

'use client'
import { createContext, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { validateUser } from '@/app/actions/auth'

const ValidationContext = createContext()

function ValidationProvider({ children }) {
  const searchParams = useSearchParams()
  const hashID = searchParams.get('tel')

  useEffect(() => {    
    validateUser(hashID)
  }, [hashID])

  return (
    <ValidationContext.Provider value={''}>
      {children}
    </ValidationContext.Provider>
  )
}

export { ValidationContext, ValidationProvider }
