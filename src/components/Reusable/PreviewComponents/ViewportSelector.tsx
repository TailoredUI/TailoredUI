import React from 'react'
import type { ViewPort } from '../../../utils/types/types'

interface ViewportSelectorProps {
  selectedViewport: ViewPort
  onViewportChange: (viewport: ViewPort) => void
  allowedViewport: ViewPort[]
}

const ViewportSelector: React.FC<ViewportSelectorProps> = ({
  selectedViewport,
  onViewportChange,
  allowedViewport,
}) => {
  return (
    <div className="hidden items-center gap-4 text-slate-400 lg:flex">
      {allowedViewport &&
        allowedViewport.length > 0 &&
        allowedViewport.map((viewport) => (
          <span
            key={viewport}
            onClick={() => onViewportChange(viewport)}
            className={`flex h-9 w-10 items-center justify-center rounded-md ${selectedViewport === viewport ? 'bg-white shadow-subtle' : 'bg-black shadow-soft'} cursor-pointer bg-opacity-5 ${viewport === 'xl' ? 'xl:flex' : ''}`}
          >
            {viewport}
          </span>
        ))}
    </div>
  )
}

export default ViewportSelector
