import { FC } from 'react'
import { Button } from "@/components/ui/button"

interface GlobalViewProps {
  onZoneClick: (zone: string) => void
}

const GlobalView: FC<GlobalViewProps> = ({ onZoneClick }) => {
  return (
    <div className="border-2 border-dashed border-gray-300 p-4 h-full">
      <h2 className="text-2xl font-bold mb-4">Global View</h2>
      <div className="space-y-4">
        <Button 
          variant="outline" 
          className="w-full h-16" 
          onClick={() => onZoneClick('global-header')}
        >
          Customizable Global Header
        </Button>
        <Button 
          variant="outline" 
          className="w-full h-32" 
          onClick={() => onZoneClick('global-fields')}
        >
          Customizable Global Fields
        </Button>
        <Button 
          variant="outline" 
          className="w-full h-16" 
          onClick={() => onZoneClick('global-actions')}
        >
          Customizable Global Actions
        </Button>
      </div>
    </div>
  )
}

export default GlobalView

