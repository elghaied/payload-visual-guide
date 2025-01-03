// 'use client'

// import { useState } from 'react'

// export default function VisualGuide() {
//   const [selectedZone, setSelectedZone] = useState<string | null>(null)

//   const handleZoneClick = (zone: string) => {
//     setSelectedZone(zone)
//     // Trigger scrolling in the Documentation component
//   }

//   return (
//     <div className="w-1/2 bg-gray-100 p-4">
//       <h2 className="text-2xl font-bold mb-4">Payload CMS Admin Panel</h2>
//       {/* Add interactive zones here */}
//       <div 
//         className="bg-blue-200 p-2 m-2 cursor-pointer" 
//         onClick={() => handleZoneClick('header')}
//       >
//         Customizable Header
//       </div>
//       <div 
//         className="bg-green-200 p-2 m-2 cursor-pointer" 
//         onClick={() => handleZoneClick('sidebar')}
//       >
//         Customizable Sidebar
//       </div>
//       {/* Add more zones as needed */}
//     </div>
//   )
// }

