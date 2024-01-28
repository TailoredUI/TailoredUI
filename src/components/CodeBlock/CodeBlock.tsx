import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface CodeBlockProps {
  language: string
  code: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  // console.log(code)

  return (
    <SyntaxHighlighter
      language={language}
      style={nightOwl}
      customStyle={{ padding: '8px 16px', borderRadius: '8px' }}
      wrapLongLines
    >
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
