import { FC } from 'react'
import RootHeaderDocs from '@/components/docs/RootHeaderDocs.mdx'
import BeforeDashBoardDocs from '@/components/docs/BeforeDashBoardDocs.mdx'

// import RootDashboardDocs from './docs/RootDashboardDocs.mdx'
// import RootNavDocs from './docs/RootNavDocs.mdx'
// import CollectionListColumnsDocs from './docs/CollectionListColumnsDocs.mdx'
// import CollectionListActionsDocs from './docs/CollectionListActionsDocs.mdx'
// import CollectionFiltersDocs from './docs/CollectionFiltersDocs.mdx'
// import GlobalHeaderDocs from './docs/GlobalHeaderDocs.mdx'
// import GlobalFieldsDocs from './docs/GlobalFieldsDocs.mdx'
// import GlobalActionsDocs from './docs/GlobalActionsDocs.mdx'
// import DocumentHeaderDocs from './docs/DocumentHeaderDocs.mdx'
// import DocumentFieldsDocs from './docs/DocumentFieldsDocs.mdx'
// import DocumentSidebarDocs from './docs/DocumentSidebarDocs.mdx'

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
      // case 'root-dashboard':
      //   return <RootDashboardDocs />
      // case 'root-nav':
      //   return <RootNavDocs />
      // case 'collection-list-columns':
      //   return <CollectionListColumnsDocs />
      // case 'collection-list-actions':
      //   return <CollectionListActionsDocs />
      // case 'collection-filters':
      //   return <CollectionFiltersDocs />
      // case 'global-header':
      //   return <GlobalHeaderDocs />
      // case 'global-fields':
      //   return <GlobalFieldsDocs />
      // case 'global-actions':
      //   return <GlobalActionsDocs />
      // case 'document-header':
      //   return <DocumentHeaderDocs />
      // case 'document-fields':
      //   return <DocumentFieldsDocs />
      // case 'document-sidebar':
      //   return <DocumentSidebarDocs />
      default:
        return <p>Select a zone to view customization details.</p>
    }
  }

  return (
    <div className="w-1/2 p-4 bg-gray-100 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Documentation</h2>
      {renderDocs()}
     
    </div>
  )
}

export default Documentation

