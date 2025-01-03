import { FC } from 'react'
import { Button } from "@/components/ui/button"

interface DocumentViewProps {
  onZoneClick: (zone: string) => void
}

const DocumentView: FC<DocumentViewProps> = ({ onZoneClick }) => {
  return (
    <div className="border-2 border-dashed border-gray-300 p-4 h-full">
      <h2 className="text-2xl font-bold mb-4">Document View</h2>
      <div className="space-y-4">
        <Button 
          variant="outline" 
          className="w-full h-16" 
          onClick={() => onZoneClick('document-header')}
        >
          Customizable Document Header
        </Button>
        <Button 
          variant="outline" 
          className="w-full h-32" 
          onClick={() => onZoneClick('document-fields')}
        >
          Customizable Document Fields
        </Button>
        <Button 
          variant="outline" 
          className="w-full h-16" 
          onClick={() => onZoneClick('document-sidebar')}
        >
          Customizable Document Sidebar
        </Button>
      </div>
    </div>
  )
}

export default DocumentView

