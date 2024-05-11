import React, { useState, useRef, useEffect } from 'react'

interface DraggableComponentProps {
  children: React.ReactNode
  containerRef: React.RefObject<HTMLDivElement>
  onPositionChange: (newPosition: { x: number; y: number }) => void
  initialPosition: { x: number; y: number }
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({
  children,
  containerRef,
  onPositionChange,
  initialPosition = { x: 0, y: 0 },
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState(initialPosition)
  const dragRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const containerElement = containerRef.current
    if (containerElement && !initialPosition.x && !initialPosition.y) {
      const { left, top } = containerElement.getBoundingClientRect()
      setPosition({ x: left, y: top })
    }
  }, [containerRef])

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    const { clientX, clientY } = e
    const { offsetLeft, offsetTop } = dragRef.current!
    const initialPos = { x: clientX - offsetLeft, y: clientY - offsetTop }
    const moveHandler = (ev: MouseEvent) => {
      const { clientX, clientY } = ev
      const containerRect = containerRef.current!.getBoundingClientRect()
      const newPos = {
        x: Math.max(
          Math.min(
            clientX - initialPos.x,
            containerRect.right - dragRef.current!.offsetWidth
          ),
          containerRect.left
        ),
        y: Math.max(
          Math.min(
            clientY - initialPos.y,
            containerRect.bottom - dragRef.current!.offsetHeight
          ),
          containerRect.top
        ),
      }
      setPosition(newPos)
      onPositionChange(newPos)
    }
    const stopDragging = () => {
      setIsDragging(false)
      document.removeEventListener('mousemove', moveHandler)
      document.removeEventListener('mouseup', stopDragging)
    }
    document.addEventListener('mousemove', moveHandler)
    document.addEventListener('mouseup', stopDragging)
  }

  return (
    <div
      ref={dragRef}
      onMouseDown={handleMouseDown}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      {children}
    </div>
  )
}

export default DraggableComponent
