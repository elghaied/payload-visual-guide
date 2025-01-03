"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RootView from "@/components/views/RootView";
import GlobalView from "@/components/views/GlobalView";
import DocumentView from "@/components/views/DocumentView";
import Documentation from "@/components/Documentation";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CollectionListView from "@/components/views/CollectionListView";

export default function Home() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const handleZoneClick = (zone: string) => {
    setSelectedZone(zone);
  };

  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="text-3xl font-bold text-center py-4">
        Payload CMS Customization Guide
      </h1>
      <Tabs defaultValue="root" className="flex-grow">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="root">Root Views</TabsTrigger>
          <TabsTrigger value="collection">Collection Views</TabsTrigger>
          <TabsTrigger value="global">Global Views</TabsTrigger>
       
        </TabsList>
        <ResizablePanelGroup direction="horizontal" >
          <ResizablePanel className="w-1/2 p-4">
            <TabsContent value="root">
              <RootView onZoneClick={handleZoneClick} />
            </TabsContent>
            <TabsContent value="collection">
            <Tabs defaultValue="list" className="w-full">
              <TabsList>
                <TabsTrigger value="list">Collection List View</TabsTrigger>
                <TabsTrigger value="edit">Document Edit View</TabsTrigger>
              </TabsList>
              
              <TabsContent value="list">
                <CollectionListView onZoneClick={handleZoneClick} />
              </TabsContent>
              <TabsContent value="edit">
              <DocumentView onZoneClick={handleZoneClick} />
              </TabsContent>
            </Tabs>
          </TabsContent>
            <TabsContent value="global">
              <GlobalView onZoneClick={handleZoneClick} />
            </TabsContent>
            
          </ResizablePanel>
          <ResizableHandle withHandle  />
          <ResizablePanel>
          
            <Documentation selectedZone={selectedZone} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </Tabs>
    </main>
  );
}
