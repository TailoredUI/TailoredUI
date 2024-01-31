import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import ReactDOMServer from 'react-dom/server'
import { formatHtml } from '../../utils/helpers/code-preview.helper'

interface CodeBlockProps {
  language: string
  children: React.ReactNode
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
  const codeAsHtmlString = formatHtml(
    ReactDOMServer.renderToString(<>{children}</>)
  ).trim()

  return (
    <>
      <SyntaxHighlighter
        language={language}
        style={nightOwl}
        customStyle={{ padding: '8px 16px', borderRadius: '8px' }}
        wrapLongLines
      >
        {codeAsHtmlString}
      </SyntaxHighlighter>
    </>
  )
}

export default CodeBlock
