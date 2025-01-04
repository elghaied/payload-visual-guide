"use client";
import { createContext, useContext, useState, ReactNode } from 'react'

type ZoneContextType = {
  selectedZone: string | null
  setSelectedZone: (zone: string) => void
}

const ZoneContext = createContext<ZoneContextType | undefined>(undefined)

export function ZoneProvider({ children }: { children: ReactNode }) {
  const [selectedZone, setSelectedZone] = useState<string | null>(null)

  return (
    <ZoneContext.Provider value={{ selectedZone, setSelectedZone }}>
      {children}
    </ZoneContext.Provider>
  )
}

export function useZone() {
  const context = useContext(ZoneContext)
  if (context === undefined) {
    throw new Error('useZone must be used within a ZoneProvider')
  }
  return context
}
