import { FC } from 'react'
import { Button } from "@/components/ui/button"

interface CollectionViewProps {
  onZoneClick: (zone: string) => void
}

const CollectionListView: FC<CollectionViewProps> = ({ onZoneClick }) => {
  return (
    <div className="border-2 border-dashed border-gray-300 p-4 h-full">
      <h2 className="text-2xl font-bold mb-4">Collection View</h2>
      <div className="space-y-4">
        <Button 
          variant="outline" 
          className="w-full h-16" 
          onClick={() => onZoneClick('collection-list-columns')}
        >
          Customizable List Columns
        </Button>
        <Button 
          variant="outline" 
          className="w-full h-32" 
          onClick={() => onZoneClick('collection-list-actions')}
        >
          Customizable List Actions
        </Button>
        <Button 
          variant="outline" 
          className="w-full h-16" 
          onClick={() => onZoneClick('collection-filters')}
        >
          Customizable Filters
        </Button>
      </div>
    </div>
  )
}

export default CollectionListView

