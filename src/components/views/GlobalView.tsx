 
import { Button } from "@/components/ui/button"
import DashboardLayout from "./DashboardLayout"
 

const GlobalView = () => {
   return (
    <DashboardLayout>
   
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

    </DashboardLayout>

  )
}

export default GlobalView

