import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Preview from '../containers/Preview/Preview'

const Components = () => {
  const { type } = useParams()
  const [loadedComponents, setLoadedComponents] = useState<React.FC[]>([])
  const [componentList, setComponentList] = useState<string[]>([])

  useEffect(() => {
    const getComponentList = async () => {
      try {
        const module = await import(
          `../components/collections/${type}/index.ts`
        )
        const file = module.default
        setLoadedComponents(file)

        const listModule = await import(
          `../components/collections/${type}/list.ts`
        )
        const listContent = listModule.default
        setComponentList(listContent)
      } catch (error: unknown) {
        if (error instanceof Error) {
          // eslint-disable-next-line no-console
          console.error(error.message)
        }
      }
    }

    if (type) {
      getComponentList()
    }
  }, [type])

  return (
    <ul>
      {loadedComponents.length > 0 &&
        loadedComponents.map((Component, index) => (
          <Preview key={index} pathToConfig={type + '/' + componentList[index]}>
            <Component />
          </Preview>
        ))}
    </ul>
  )
}

export default Components
