 
import { Button } from "@/components/ui/button"
 

const GlobalView = () => {
   return (
    <div className="border-2 border-dashed border-gray-300 p-4 h-full">
      <h2 className="text-2xl font-bold mb-4">Global View</h2>
      <div className="space-y-4">
        <Button 
   
        >
          Customizable Global Header
        </Button>
        <Button 
 
        >
          Customizable Global Fields
        </Button>
        <Button 
   
        >
          Customizable Global Actions
        </Button>
      </div>
    </div>
  )
}

export default GlobalView

