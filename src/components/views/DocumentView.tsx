import DashboardLayout from './DashboardLayout'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Calendar, ChevronRight, Link, MoreVertical } from 'lucide-react'
import * as React from 'react';

 
const DocumentView: React.FC = () => {
  return (
    <DashboardLayout>
    
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span>Pages</span>
            <ChevronRight className="h-4 w-4" />
            <span>Page 1</span>
          </div>
          
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Page 1</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline">Edit</Button>
              <Button variant="outline">Live Preview</Button>
              <Button variant="outline">
                Versions
                <span className="ml-2 rounded-full bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">
                  3
                </span>
              </Button>
              <Button variant="outline">API</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Status Bar */}
      <div className="border-b border-border bg-muted/50">
        <div className="container py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Status:</span>
              <span className="font-medium">Published</span>
              <Button variant="link" className="text-sm h-auto p-0">Unpublish</Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Last Modified:</span>
              <span>January 4th 2025, 12:43 AM</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Created:</span>
              <span>January 4th 2025, 12:43 AM</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2">
              <Link className="h-4 w-4" />
              Preview
            </Button>
            <Button>Publish changes</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>More actions</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-6">
        <div className="grid grid-cols-[1fr,300px] gap-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <label className="text-sm font-medium flex items-center gap-1">
                Title
                <span className="text-red-500">*</span>
              </label>
              <Input defaultValue="Page 1" className="max-w-xl" />
            </div>

            <Tabs defaultValue="content">
              <TabsList>
                <TabsTrigger value="hero">Hero</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="seo">SEO</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium flex items-center gap-1">
                  Layout
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2 text-sm">
                  <Button variant="ghost" size="sm">Collapse All</Button>
                  <Button variant="ghost" size="sm">Show All</Button>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">01</span>
                  <span className="text-sm">Call to Action</span>
                  <span className="text-sm text-muted-foreground">Untitled</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Add Layout
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <label className="text-sm font-medium">Published At</label>
              <div className="relative">
                <Input defaultValue="01/04/2025" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-8 top-0"
                >
                  <Calendar className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0"
                >
                  ×
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Slug</label>
                <Button variant="link" className="text-xs h-auto p-0">
                  Unlock
                </Button>
              </div>
              <Input defaultValue="page-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
 
    </DashboardLayout>

  )
}

export default DocumentView

