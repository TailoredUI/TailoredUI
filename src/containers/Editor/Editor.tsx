import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducer'
import DraggableComponent from '../../components/Reusable/Draggable/DraggableComponent'
import { extractLastPart } from '../../utils/helpers/functions.helper'
import type { ComponentType } from '../../components/collections/buttons'
import DragAndDropIcon from '../../assets/images/icons/DragAndDrop.icon'
import { CustomizableComponentSchema } from '../../utils/types/types'

interface EditorProps {}

const Editor: React.FC<EditorProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const componentPath = useSelector(
    (state: RootState) => state.component.selectedComponentPath
  )
  const [Component, setComponent] = useState<React.ReactElement<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    ComponentType
  > | null>(null)
  const [componentConfigData, setComponentConfigData] = useState<
    CustomizableComponentSchema | object
  >({})
  const [isDraggable, setIsDraggable] = useState<boolean>(true)
  const [componentPosition, setComponentPosition] = useState<{
    x: number
    y: number
  } | null>(null)

  useEffect(() => {
    const getSelectedComponent = async () => {
      const response = await import(
        `../../components/collections/${componentPath}/${extractLastPart(
          componentPath as string
        )}`
      )

      // Load the JSON config file using fetch
      const configData = await fetch(
        `src/components/collections/${componentPath}/${extractLastPart(
          componentPath as string
        ).toLowerCase()}.config.json`
      ).then((response) => response.json())

      setComponentConfigData(configData)

      const LoadedComponent = response.default
      setComponent(<LoadedComponent />)
    }

    if (componentPath) {
      getSelectedComponent()
    }
  }, [componentPath])

  useEffect(() => {
    if (isDraggable && componentPosition === null) {
      const containerRect = containerRef.current?.getBoundingClientRect()
      if (containerRect) {
        const centerX = containerRect.left + containerRect.width / 2
        const centerY = containerRect.top + containerRect.height / 2
        setComponentPosition({ x: centerX, y: centerY })
      }
    }
  }, [isDraggable, componentPosition])

  // eslint-disable-next-line no-console
  console.log(componentConfigData)

  const toggleDraggable = () => {
    setIsDraggable((prevState) => !prevState)
  }

  const handleComponentPositionChange = (newPosition: {
    x: number
    y: number
  }) => {
    setComponentPosition(newPosition)
  }

  return (
    <div className="flex h-screen bg-editorBg text-white">
      <div className="flex w-24 flex-col items-center bg-editorBg p-4">
        {/* Left Sidebar (Utility) */}
        {/* <h3 className="mb-2 font-semibold">Utility</h3> */}
        <div onClick={toggleDraggable}>
          <DragAndDropIcon
            className={`aspect-square w-8 cursor-pointer ${isDraggable ? 'stroke-orange-400' : 'hover:stroke-orange-400'}`}
          />
        </div>
        {/* Add other utility components here */}
      </div>
      <div className="flex-1" ref={containerRef}>
        <div className="inset-0 h-full bg-editorMain bg-[radial-gradient(#343b4d,transparent_2px)] [background-size:32px_32px]">
          {Component && Component !== null && (
            <>
              {isDraggable ? (
                <DraggableComponent
                  containerRef={containerRef}
                  onPositionChange={handleComponentPositionChange}
                  initialPosition={
                    componentPosition as { x: number; y: number }
                  }
                >
                  <Component.type
                    {...Component.props}
                    className="rounded-lg bg-white px-4 py-2 text-background hover:bg-orange-400"
                  />
                </DraggableComponent>
              ) : (
                <div
                  style={{
                    position: 'absolute',
                    left: componentPosition?.x || 0,
                    top: componentPosition?.y || 0,
                  }}
                >
                  <Component.type
                    {...Component.props}
                    className="bg-orange-400"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div className="w-96 bg-editorBg p-4">
        {/* Right Sidebar (Main) */}
        <h3 className="mb-2 font-semibold">Editor</h3>
        {/* Add component editing options here */}
      </div>
    </div>
  )
}

export default Editor
