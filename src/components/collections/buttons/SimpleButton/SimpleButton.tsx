import React from 'react'

interface InterfaceSimpleButtonProps {
  className?: string
  label?: string
}

const SimpleButton: React.FC<InterfaceSimpleButtonProps> = ({
  className = 'rounded-md bg-white p-4 text-slate-500',
  label = 'Click Me',
}) => {
  return <button className={`${className}`}>{label}</button>
}

export default SimpleButton
