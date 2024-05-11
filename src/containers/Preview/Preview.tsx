import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { selectComponent } from '../../redux/action'

import ResizableDiv from '../../components/Reusable/Resizable/ResizableDiv.tsx'
import CodeBlock from '../../components/CodeBlock/CodeBlock'

interface InterfacePreviewProps {
  children: React.ReactNode
  pathToConfig?: string
}

const Preview: React.FC<InterfacePreviewProps> = ({
  children,
  pathToConfig = '',
}) => {
  const [toggleView, setToggleView] = useState('view')
  const [selectedViewport, setSelectedViewport] = useState('xl')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClickedCustomization = () => {
    dispatch(selectComponent(pathToConfig))
    navigate('/editor')
  }

  const handlePreviewToggle = (toggle: string) => {
    setToggleView(toggle)
  }

  const handleViewPortSelection = (select: string) => {
    setSelectedViewport(select)
  }

  const getViewportSize = (sizeKey: string): string | null => {
    const sizes: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
    } = {
      xs: '350',
      sm: '640',
      md: '768',
      lg: '1024',
      xl: '1280',
      '2xl': '1536',
      '3xl': '1920',
    }

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
            <span
              onClick={() => handleViewPortSelection('xs')}
              className={`flex h-9 w-10 items-center justify-center rounded-md ${selectedViewport === 'xs' ? 'bg-white shadow-subtle' : 'bg-black shadow-soft'} cursor-pointer bg-opacity-5`}
            >
              xs
            </span>
            <span
              onClick={() => handleViewPortSelection('sm')}
              className={`flex h-9 w-10 items-center justify-center rounded-md ${selectedViewport === 'sm' ? 'bg-white shadow-subtle' : 'bg-black shadow-soft'} cursor-pointer bg-opacity-5`}
            >
              sm
            </span>
            <span
              onClick={() => handleViewPortSelection('md')}
              className={`flex h-9 w-10 items-center justify-center rounded-md ${selectedViewport === 'md' ? 'bg-white shadow-subtle' : 'bg-black shadow-soft'} cursor-pointer bg-opacity-5`}
            >
              md
            </span>
            <span
              onClick={() => handleViewPortSelection('lg')}
              className={`flex h-9 w-10 items-center justify-center rounded-md ${selectedViewport === 'lg' ? 'bg-white shadow-subtle' : 'bg-black shadow-soft'} cursor-pointer bg-opacity-5`}
            >
              lg
            </span>
            <span
              onClick={() => handleViewPortSelection('xl')}
              className={`hidden h-9 w-10 items-center justify-center rounded-md xl:flex ${selectedViewport === 'xl' ? 'bg-white shadow-subtle' : 'bg-black shadow-soft'} cursor-pointer bg-opacity-5`}
            >
              xl
            </span>
          </div>
          <div
            onClick={() => handleClickedCustomization()}
            className="cursor-pointer rounded-md px-4 py-2 capitalize text-slate-500 shadow-subtle hover:font-semibold hover:shadow-soft"
          >
            Customize
          </div>
        </div>
        <div className="select-none rounded-lg bg-white p-1 text-slate-500 xs:p-4">
          {toggleView === 'view' ? (
            <ResizableDiv w={getViewportSize(selectedViewport)}>
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
