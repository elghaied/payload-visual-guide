import { FC } from 'react'
import { Button } from "@/components/ui/button"

interface RootViewProps {
  onZoneClick: (zone: string) => void
}

const RootView: FC<RootViewProps> = ({ onZoneClick }) => {
  return (
    <div className="border-2 border-dashed border-gray-300 p-4 h-full">
      <h2 className="text-2xl font-bold mb-4">Root View</h2>
      <div className="space-y-4">
        <Button 
          variant="outline" 
          className="w-full h-16" 
          onClick={() => onZoneClick('root-header')}
        >
          Customizable Header
        </Button>
        <Button 
          variant="outline" 
          className="w-full h-32" 
          onClick={() => onZoneClick('root-dashboard')}
        >
          Customizable Dashboard
        </Button>
        <Button 
          variant="outline" 
          className="w-full h-16" 
          onClick={() => onZoneClick('root-nav')}
        >
          Customizable Navigation
        </Button>
      </div>
    </div>
  )
}

export default RootView

