import { FC } from 'react'
import RootHeaderDocs from '@/components/docs/RootHeaderDocs.mdx'
import BeforeDashBoardDocs from '@/components/docs/BeforeDashBoardDocs.mdx'



interface DocumentationProps {
  selectedZone: string | null
}

const Documentation: FC<DocumentationProps> = ({ selectedZone }) => {
  const renderDocs = () => {
    switch (selectedZone) {
      case 'root-header':
        return <RootHeaderDocs />
      case 'before-dashboard':
        return <BeforeDashBoardDocs />

      default:
        return <p>Select a zone to view customization details.</p>
    }
  }

  return (
    <div className="prose  p-4 bg-gray-100 overflow-y-auto">
 
      {renderDocs()}
     
    </div>
  )
}

export default Documentation

