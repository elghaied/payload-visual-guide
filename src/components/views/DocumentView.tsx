import { FC } from 'react'
import { Button } from "@/components/ui/button"
import DashboardLayout from './DashboardLayout'

 
const DocumentView: FC = () => {
  return (
    <DashboardLayout>
    
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
 
    </DashboardLayout>

  )
}

export default DocumentView

