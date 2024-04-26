import React, { useState, useEffect } from 'react'

interface ResizableDivProps {
  children: React.ReactNode
  w?: string | null
}

/**
 *
 * @children - children to ResizableDiv component
 * @prop w - custom width to be set to ResizableDiv
 * @returns a resizable div
 */

const ResizableDiv: React.FC<ResizableDivProps> = ({ children, w }) => {
  const [width, setWidth] = useState<number>(1296)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [initialX, setInitialX] = useState<number>(0)

  useEffect(() => {
    if (w) {
      setWidth((state) => (w ? parseInt(w) : state))
    }
  }, [w])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging) {
        const newWidth = width + (event.clientX - initialX)
        setWidth(Math.max(100, newWidth))
        setInitialX(event.clientX)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, initialX, width])

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true)
    setInitialX(event.clientX)
  }

  return (
    <div
      className="relative h-80 min-w-[320px] max-w-[1296px]"
      style={{
        width: `${width}px`,
      }}
    >
      <div
        className="absolute bottom-0 right-0 top-0 hidden w-min items-center lg:flex"
        style={{ cursor: isDragging ? 'grabbing' : 'ew-resize' }}
        onMouseDown={handleMouseDown}
      >
        <div className="h-8 w-2 rounded-md bg-orange-400" />
      </div>
      <div className="mr-4 box-border flex h-full items-start justify-center overflow-x-scroll rounded-lg bg-black bg-opacity-5 p-6 ">
        {children}
      </div>
    </div>
  )
}

export default ResizableDiv
