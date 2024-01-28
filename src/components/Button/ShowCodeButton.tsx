import React from 'react'

interface ShowCodeButtonProps {
  onClick: () => void
}

const ShowCodeButton: React.FC<ShowCodeButtonProps> = ({ onClick }) => {
  return (
    <button className="mt-2 text-blue-500 underline" onClick={onClick}>
      Show Code
    </button>
  )
}

export default ShowCodeButton
