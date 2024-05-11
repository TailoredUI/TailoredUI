import React from 'react'

interface CollectionCardProps {
  imageSrc: string
  title: string
  onClick: () => void
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  imageSrc,
  title,
  onClick,
}) => {
  return (
    <div
      className="group relative max-w-[80%] cursor-pointer overflow-hidden rounded-lg border-2 border-white"
      onClick={onClick}
    >
      <img
        src={imageSrc}
        alt={title}
        className="h-auto w-full transform transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-4">
        <h3 className="text-center text-lg font-semibold">{title}</h3>
      </div>
    </div>
  )
}

export default CollectionCard
