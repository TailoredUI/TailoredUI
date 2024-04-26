/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import SimpleButton from '../components/collections/buttons/SimpleButton/SimpleButton'
import Preview from '../containers/Preview/Preview'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducer'

const extractLastPart = (path: string) => {
  const parts = path.split('/')

  return parts[parts.length - 1]
}

const Dummy = ({
  className,
  collection = 'buttons',
}: {
  className: string
  collection: string
}) => {
  const [componentList, setComponentList] = useState<string[]>([])
  const [Component, setComponent] = useState<React.ReactElement<
    any,
    any
  > | null>(null)
  const componentPath = useSelector(
    (state: RootState) => state.component.selectedComponentPath
  )
  console.log(className)

  useEffect(() => {
    const getSelectedComponent = async () => {
      const response = await import(
        `../components/collections/${componentPath}/${extractLastPart(componentPath as string)}`
      )
      const LoadedComponent = response.default
      setComponent(<LoadedComponent />)
    }
    if (componentPath) {
      getSelectedComponent()
    }
  }, [componentPath])

  useEffect(() => {
    const getComponentList = async () => {
      const module = await import(
        `../components/collections/${collection}/index.ts`
      )
      const file = module.default
      setComponentList(file)
    }
    if (collection) {
      try {
        getComponentList()
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message)
          throw error
        }
      }
    }
  }, [])

  return (
    <div>
      <Preview pathToConfig={collection + '/' + componentList[0]}>
        <SimpleButton className="rounded-md bg-white p-4" label="Working" />
      </Preview>
      <Preview>
        <button className="rounded-md px-4 py-2 shadow-subtle">Button2</button>
      </Preview>
      {Component && Component}
    </div>
  )
}

export default Dummy
