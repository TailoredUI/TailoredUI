import React, { Suspense, useState } from 'react'
import { lazy } from 'react'

import { button1code } from '../components/Button/Button1'
const Button1 = lazy(() => import('../components/Button/Button1'))
const Button2 = lazy(() => import('../components/Button/Button2'))
// ... import other button components

const CodeBlock = lazy(() => import('../components/CodeBlock/CodeBlock'))
const ShowCodeButton = lazy(() => import('../components/Button/ShowCodeButton'))

const Buttons: React.FC = () => {
  const [showCode, setShowCode] = useState<{ [key: string]: boolean }>({})

  const handleShowCode = (buttonKey: string) => {
    setShowCode((prevShowCode) => ({
      ...prevShowCode,
      [buttonKey]: !prevShowCode[buttonKey],
    }))
  }

  return (
    <div>
      <h2>Button Showcase</h2>

      <Suspense fallback={<div>Loading...</div>}>
        <Button1 />
        <ShowCodeButton onClick={() => handleShowCode('primary')} />
        {showCode['primary'] && <CodeBlock language="jsx" code={button1code} />}

        <Button2 />
        <ShowCodeButton onClick={() => handleShowCode('secondary')} />
        {showCode['secondary'] && (
          <CodeBlock language="jsx" code={Button2.toString()} />
        )}
      </Suspense>
    </div>
  )
}

export default Buttons
