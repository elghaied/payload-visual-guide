import { FC } from 'react'
import { Button } from "@/components/ui/button"

 
const DocumentView: FC = () => {
  return (
    <div className="border-2 border-dashed border-gray-300 p-4 h-full">
      <h2 className="text-2xl font-bold mb-4">Document View</h2>
      <div className="space-y-4">
        <Button 
         
        >
          Customizable Document Header
        </Button>
        <Button 
         
        >
          Customizable Document Fields
        </Button>
        <Button 
         
        >
          Customizable Document Sidebar
        </Button>
      </div>
    </div>
  )
}

export default DocumentView

