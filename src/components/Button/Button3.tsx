import React from 'react'

const Button3 = () => {
  return (
    <div>
      <a
        className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        href="#"
      >
        <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

        <span className="relative block border border-current bg-white px-8 py-3">
          {' '}
          Button3{' '}
        </span>
      </a>
    </div>
  )
}

export default Button3
