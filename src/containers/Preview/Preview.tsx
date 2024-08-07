import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { selectComponent } from '../../redux/action'

import ResizableDiv from '../../components/Reusable/Resizable/ResizableDiv.tsx'
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import ViewportSelector from '../../components/Reusable/PreviewComponents/ViewportSelector.tsx'
import type { ViewPort } from '../../utils/types/types.ts'

interface InterfacePreviewProps {
  children: React.ReactNode
  pathToConfig?: string
}

export const sizes: {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  '2xl': number
  '3xl': number
} = {
  xs: 350,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
}

export const viewportOptions: ViewPort[] = ['xs', 'sm', 'md', 'lg', 'xl']

const Preview: React.FC<InterfacePreviewProps> = ({
  children,
  pathToConfig = '',
}) => {
  const [toggleView, setToggleView] = useState('view')
  const [selectedViewport, setSelectedViewport] = useState<ViewPort>('xl')
  const [maxResizableWidth, setMaxResizableWidth] = useState<number | null>(
    null
  )
  const [allowedViewport, setAllowedViewport] =
    useState<ViewPort[]>(viewportOptions)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const resizableDivWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateViewports = () => {
      if (resizableDivWrapperRef.current) {
        const sortedSizes = Object.entries(sizes)
          .map(([key, value]) => [key, value] as [ViewPort, number])
          .sort((a, b) => a[1] - b[1])

        const smallerViewports: ViewPort[] = sortedSizes.reduce(
          (acc, [key, value]) => {
            if (
              value <
              (resizableDivWrapperRef.current as HTMLDivElement).clientWidth
            ) {
              acc.push(key)
            }

            return acc
          },
          [] as ViewPort[]
        )
        setAllowedViewport(smallerViewports)

        let left = 0
        let right = sortedSizes.length - 1
        let result: ViewPort | undefined = undefined
        while (left <= right) {
          const mid = Math.floor((left + right) / 2)
          if (
            sortedSizes[mid][1] < resizableDivWrapperRef.current.clientWidth
          ) {
            result = sortedSizes[mid][0]
            left = mid + 1
          } else {
            right = mid - 1
          }
        }
        setSelectedViewport(result || 'xs')
        setMaxResizableWidth(getViewportSize(result || '3xl'))
      }
    }

    updateViewports()

    const resizeObserver = new ResizeObserver(() => {
      updateViewports()
    })

    if (resizableDivWrapperRef.current) {
      resizeObserver.observe(resizableDivWrapperRef.current)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  const handleClickedCustomization = () => {
    dispatch(selectComponent(pathToConfig))
    navigate('/editor')
  }

  const handlePreviewToggle = (toggle: string) => {
    setToggleView(toggle)
  }

  const handleViewportChange = (viewport: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
    setSelectedViewport(viewport)
  }

  const getViewportSize = (sizeKey: string): number | null => {
    return sizes[sizeKey as keyof typeof sizes] || null
  }

  return (
    <div className="">
      <div className="my-4">
        <div className="mb-4 flex h-16 items-center justify-between rounded-lg bg-white p-4">
          <div className="flex h-9 rounded-md bg-black bg-opacity-5 p-0.5">
            <div
              onClick={() => handlePreviewToggle('view')}
              className={`${toggleView === 'view' ? 'rounded-md bg-white font-semibold text-black shadow-soft' : 'text-slate-400'} flex cursor-pointer items-center gap-2 p-2`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  className={`h-5 w-5 ${toggleView === 'view' ? 'stroke-blue-500' : 'stroke-slate-400'}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
              <span className="capitalize">Preview</span>
            </div>
            <div
              onClick={() => handlePreviewToggle('code')}
              className={`${toggleView === 'code' ? 'rounded-md bg-white font-semibold text-black shadow-soft' : 'text-slate-400'} flex cursor-pointer items-center gap-2 p-2`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  className={`h-5 w-5 ${toggleView === 'code' ? 'stroke-blue-500' : 'stroke-slate-400'}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </span>
              <span className="capitalize">Code</span>
            </div>
          </div>
          <div className="hidden items-center gap-4 text-slate-400 lg:flex">
            <ViewportSelector
              allowedViewport={allowedViewport}
              selectedViewport={selectedViewport}
              onViewportChange={handleViewportChange}
            />
          </div>
          <div
            onClick={() => handleClickedCustomization()}
            className="cursor-pointer rounded-md px-4 py-2 capitalize text-slate-500 shadow-subtle hover:font-semibold hover:shadow-soft"
          >
            Customize
          </div>
        </div>
        <div
          ref={resizableDivWrapperRef}
          className="select-none rounded-lg bg-white p-1 text-slate-500 xs:p-4"
        >
          {toggleView === 'view' ? (
            <ResizableDiv
              w={getViewportSize(selectedViewport)}
              maxWidth={maxResizableWidth}
            >
              {children}
            </ResizableDiv>
          ) : (
            <CodeBlock language="jsx">{children}</CodeBlock>
          )}
        </div>
      </div>
    </div>
  )
}

export default Preview
