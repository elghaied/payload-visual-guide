import { FC } from 'react'

import DashboardLayout from './DashboardLayout'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, ChevronUp, SlidersHorizontal } from 'lucide-react'
 

const CollectionListView: FC  = ( ) => {
  return (
    <DashboardLayout>
   
   <div className="min-h-screen bg-background text-foreground p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Pages</h1>
        <Button variant="secondary">Create New</Button>
      </div>

      <div className="flex items-center justify-between mb-6 gap-4">
        <div className="relative flex-1">
          <Input
            type="search"
            placeholder="Search by Title"
            className="w-full bg-background"
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                Columns
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Title</DropdownMenuItem>
              <DropdownMenuItem>Slug</DropdownMenuItem>
              <DropdownMenuItem>Updated At</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Add Filter</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <input type="checkbox" className="rounded border-gray-600" />
              </TableHead>
              <TableHead className="cursor-pointer">
                Title
                <ChevronUp className="inline-block w-4 h-4 ml-2" />
              </TableHead>
              <TableHead className="cursor-pointer">
                Slug
                <ChevronDown className="inline-block w-4 h-4 ml-2" />
              </TableHead>
              <TableHead className="cursor-pointer">
                Updated At
                <ChevronDown className="inline-block w-4 h-4 ml-2" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <input type="checkbox" className="rounded border-gray-600" />
              </TableCell>
              <TableCell>Page 1</TableCell>
              <TableCell>page-1</TableCell>
              <TableCell>January 4th 2025, 12:43 AM</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
        <div>1-1 of 1</div>
        <div className="flex items-center gap-2">
          <span>Per Page:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                10
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>5</DropdownMenuItem>
              <DropdownMenuItem>10</DropdownMenuItem>
              <DropdownMenuItem>20</DropdownMenuItem>
              <DropdownMenuItem>50</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
    </DashboardLayout>

  )
}

export default CollectionListView

