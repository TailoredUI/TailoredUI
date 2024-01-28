import { useState } from 'react'
import avatar from '../../assets/images/avatar.jpeg'

const Avatar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div
      className="absolute right-[18.5rem] top-[37rem] z-10 flex w-max cursor-pointer items-center gap-2 rounded-full bg-white p-2 font-semibold shadow-thin xs:right-[23.7rem] sm:right-[26rem] sm:top-[30rem]"
      onClick={() => setIsOpen((state) => !state)}
    >
      <div className="rounded-full border-[4px] border-gray-500">
        <img
          src={avatar}
          alt="avator image"
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div
        className={`pr-2 uppercase text-gray-500 transition-all ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        AKASH
      </div>
    </div>
  )
}

export default Avatar
