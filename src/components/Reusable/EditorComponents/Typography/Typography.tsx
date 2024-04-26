import React, { useState, ChangeEvent } from 'react'

import LeftAlign from '../../../../assets/images/icons/LeftAlign.icon'
import RightAlign from '../../../../assets/images/icons/RightAlign.icon'
import CenterAlign from '../../../../assets/images/icons/CenterAlign.icon'
import JustifyAlign from '../../../../assets/images/icons/JustigyAlign.icon'
import CircleXFilledIcon from '../../../../assets/images/icons/CircleXFillled.icon'
import ItalicIcon from '../../../../assets/images/icons/Italic.icon'
import BoldIcon from '../../../../assets/images/icons/Bold.icon'

interface TypographyProps {
  // You can define additional props if needed
}

const Typography: React.FC<TypographyProps> = () => {
  const [font, setFont] = useState<string>('')
  const [weight, setWeight] = useState<string>('')
  const [size, setSize] = useState<string>('')
  const [sizeUnit, setSizeUnit] = useState<string>('px')
  const [lineHeight, setLineHeight] = useState<string>('')
  const [lineHeightUnit, setLineHeightUnit] = useState<string>('px')
  // const [color, setColor] = useState<string>('')
  // const [align, setAlign] = useState<string>('')
  // const [style, setStyle] = useState<string>('')
  // const [showColorPicker, setShowColorPicker] = useState<boolean>(false)

  const handleSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value)
  }

  const handleSizeUnitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSizeUnit(event.target.value)
  }

  const handleLineHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLineHeight(event.target.value)
  }

  const handleLineHeightUnitChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setLineHeightUnit(event.target.value)
  }

  // const handleColorChange = (color) => {
  //   console.log(color)
  // }

  return (
    <div className="w-80 rounded-md bg-white bg-opacity-10 p-4 shadow-md">
      <label className="mb-2 flex w-full items-center gap-4">
        <span className="min-w-16">Font</span>
        <select
          className="border-gray-00 ml-2 w-full rounded-md border p-2 text-slate-500"
          value={font}
          onChange={(e) => setFont(e.target.value)}
        >
          {/* Add font options */}
          <option value="arial">Arial</option>
          <option value="times-new-roman">Times New Roman</option>
          {/* Add more fonts as needed */}
        </select>
      </label>

      <label className="mb-2 flex w-full items-center gap-4">
        <span className="min-w-16">Weight</span>
        <select
          className="border-gray-00 ml-2 w-full rounded-md border p-2 text-slate-500"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        >
          {/* Add weight options */}
          <option value="normal">Normal</option>
          <option value="bold">Bold</option>
          {/* Add more weight options as needed */}
        </select>
      </label>

      <label className="mb-2 flex w-full items-center gap-1">
        <span className="min-w-16">Size</span>
        <input
          className="border-gray-00 ml-5 w-32 rounded-md border p-2 text-slate-500 outline-none"
          type="number"
          placeholder="5"
          value={size}
          onChange={handleSizeChange}
        />
        <select
          className="border-gray-00 ml-2 w-full rounded-md border p-2 text-slate-500"
          value={sizeUnit}
          onChange={handleSizeUnitChange}
        >
          <option value="px">px</option>
          <option value="rem">rem</option>
          <option value="em">em</option>
        </select>
      </label>

      <label className="mb-2 flex w-full items-center gap-1">
        <span className="min-w-16">Height</span>
        <input
          className="border-gray-00 ml-5 w-32 rounded-md border p-2 text-slate-500 outline-none"
          type="number"
          placeholder="5"
          value={lineHeight}
          onChange={handleLineHeightChange}
        />
        <select
          className="border-gray-00 ml-2 w-full rounded-md border p-2 text-slate-500"
          value={lineHeightUnit}
          onChange={handleLineHeightUnitChange}
        >
          <option value="px">px</option>
          <option value="rem">rem</option>
          <option value="em">em</option>
        </select>
      </label>

      <label className="mb-2 flex w-full items-center gap-4">
        <span className="min-w-16">Color</span>
        {/* <input
          className="border-gray-00 ml-2 cursor-pointer rounded-md border text-slate-500 outline-none"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        /> */}
        <div className="ml-2 flex w-full items-center gap-2 rounded-md bg-white p-1">
          <div
            className="h-8 w-8 cursor-pointer rounded-md bg-orange-400 hover:brightness-90"
            // onClick={() => setShowColorPicker((state) => !state)}
          ></div>
          <div className="uppercase text-orange-400">#FFF</div>
        </div>
      </label>

      <label className="mb-2 flex w-full items-center gap-4">
        <span className="min-w-16">Align</span>
        <div className="ml-2 flex w-min flex-row justify-between overflow-hidden rounded-md bg-white">
          <span className="cursor-pointer border-r-2 border-slate-300 p-1 hover:bg-slate-200">
            <LeftAlign />
          </span>
          <span className="cursor-pointer border-r-2 border-slate-300 p-1 hover:bg-slate-200">
            <CenterAlign />
          </span>
          <span className="cursor-pointer border-r-2 border-slate-300 p-1 hover:bg-slate-200">
            <RightAlign />
          </span>
          <span className="cursor-pointer p-1 hover:bg-slate-200">
            <JustifyAlign />
          </span>
        </div>
      </label>

      <label className="mb-2 flex w-full items-center gap-4">
        <span className="min-w-16">Style</span>
        <div className="ml-2 flex w-min flex-row justify-between overflow-hidden rounded-md bg-white">
          <span className="flex cursor-pointer items-center border-r-2 border-slate-300 p-1 hover:bg-slate-200">
            <CircleXFilledIcon />
          </span>
          <span className="flex cursor-pointer items-center border-r-2 border-slate-300 p-1 hover:bg-slate-200">
            <ItalicIcon />
          </span>
          <span className="flex cursor-pointer items-center border-r-2 border-slate-300 p-1 hover:bg-slate-200">
            <BoldIcon />
          </span>
          <span className="cursor-pointer p-1 px-2.5 text-xl text-slate-500 line-through hover:bg-slate-200">
            T
          </span>
        </div>
      </label>
    </div>
  )
}

export default Typography
