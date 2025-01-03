'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RootView from '@/components/views/RootView'
import CollectionView from '@/components/views/CollectionView'
import GlobalView from '@/components/views/GlobalView'
import DocumentView from '@/components/views/DocumentView'
import Documentation from '@/components/Documentation'

export default function Home() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null)

  const handleZoneClick = (zone: string) => {
    setSelectedZone(zone)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="text-3xl font-bold text-center py-4">Payload CMS Customization Guide</h1>
      <Tabs defaultValue="root" className="flex-grow">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="root">Root Views</TabsTrigger>
          <TabsTrigger value="collection">Collection Views</TabsTrigger>
          <TabsTrigger value="global">Global Views</TabsTrigger>
          <TabsTrigger value="document">Document Views</TabsTrigger>
        </TabsList>
        <div className="flex flex-grow">
          <div className="w-1/2 p-4">
            <TabsContent value="root"><RootView onZoneClick={handleZoneClick} /></TabsContent>
            <TabsContent value="collection"><CollectionView onZoneClick={handleZoneClick} /></TabsContent>
            <TabsContent value="global"><GlobalView onZoneClick={handleZoneClick} /></TabsContent>
            <TabsContent value="document"><DocumentView onZoneClick={handleZoneClick} /></TabsContent>
          </div>
          <Documentation selectedZone={selectedZone} />
        </div>
      </Tabs>
    </main>
  )
}

