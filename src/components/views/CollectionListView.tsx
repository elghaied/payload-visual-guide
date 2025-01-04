import { FC } from 'react'
import { Button } from "@/components/ui/button"

 

const CollectionListView: FC  = ( ) => {
  return (
    <div className="border-2 border-dashed border-gray-300 p-4 h-full">
      <h2 className="text-2xl font-bold mb-4">Collection View</h2>
      <div className="space-y-4">
        <Button 
         
        >
          Customizable List Columns
        </Button>
        <Button 
          
        >
          Customizable List Actions
        </Button>
        <Button 
         
        >
          Customizable Filters
        </Button>
      </div>
    </div>
  )
}

export default CollectionListView

