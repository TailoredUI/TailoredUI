// import React, { useState, ChangeEvent, useRef, useEffect } from 'react'

// import LeftAlign from '../../../../assets/images/icons/LeftAlign.icon'
// import RightAlign from '../../../../assets/images/icons/RightAlign.icon'
// import CenterAlign from '../../../../assets/images/icons/CenterAlign.icon'
// import JustifyAlign from '../../../../assets/images/icons/JustigyAlign.icon'
// import CircleXFilledIcon from '../../../../assets/images/icons/CircleXFillled.icon'
// import ItalicIcon from '../../../../assets/images/icons/Italic.icon'
// import BoldIcon from '../../../../assets/images/icons/Bold.icon'
// import { WindowWithEyeDropper } from '../../../../utils/interfaces/interface'
// import ColorPicker from './ColorPicker/ColorPicker'

// interface TypographyProps {
//   // You can define additional props if needed
// }

// const toHex = (decimal: number): string => {
//   return decimal.toString(16).padStart(2, '0')
// }

// const Typography: React.FC<TypographyProps> = () => {
//   const [font, setFont] = useState<string>('')
//   const [weight, setWeight] = useState<string>('')
//   const [size, setSize] = useState<string>('')
//   const [sizeUnit, setSizeUnit] = useState<string>('px')
//   const [lineHeight, setLineHeight] = useState<string>('')
//   const [lineHeightUnit, setLineHeightUnit] = useState<string>('px')
//   const [color, setColor] = useState<string>('#000000')
//   const [toggleColorPicker, setToggleColorPicker] = useState<boolean>(false)
//   const [align, setAlign] = useState<string>('')
//   const [style, setStyle] = useState<string>('')
//   const [rgbColor, setRgbColor] = useState<string>('rgb(0, 0, 0)')

//   const typographyComponentRef = useRef(null)
//   const colorPickerRef = useRef(null)

//   const handleSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setSize(event.target.value)
//   }

//   const handleSizeUnitChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     setSizeUnit(event.target.value)
//   }

//   const handleLineHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setLineHeight(event.target.value)
//   }

//   const handleLineHeightUnitChange = (
//     event: ChangeEvent<HTMLSelectElement>
//   ) => {
//     setLineHeightUnit(event.target.value)
//   }

//   const handleColorChange = (newColor: string) => {
//     setColor(newColor)
//     const rgb = hexToRgb(newColor)
//     if (rgb) {
//       setRgbColor(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)
//     }
//   }

//   const handleColorInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const newColor = e.target.value
//     handleColorChange(newColor)
//   }

//   const hexToRgb = (hex: string) => {
//     const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

//     return result
//       ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16),
//       }
//       : null
//   }

//   const handleOutsideClick = (e:MouseEvent) => {
//     if (
//       typographyComponentRef.current &&
//       !typographyComponentRef.current.contains(e.target) &&
//       colorPickerRef.current &&
//       !colorPickerRef.current.contains(e.target)
//     ) {
//       setToggleColorPicker(false)
//     }
//   }

//   useEffect(() => {
//     document.addEventListener('mousedown', handleOutsideClick)

//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick)
//     }
//   }, [])

//   // Define an array of preset color options
//   const presetColors = [
//     '#FF0000',
//     '#FFA500',
//     '#FFFF00',
//     '#008000',
//     '#0000FF',
//     '#800080',
//     '#000000',
//     '#FFFFFF',
//   ]

//   return (
//     <div
//       className="relative w-80 rounded-md bg-white bg-opacity-10 p-4 shadow-md"
//       ref={typographyComponentRef}
//     >
//       <label className="mb-2 flex w-full items-center gap-4">
//         <span className="min-w-16">Font</span>
//         <select
//           className="border-gray-00 ml-2 w-full rounded-md border p-2 text-slate-500"
//           value={font}
//           onChange={(e) => setFont(e.target.value)}
//         >
//           {/* Add font options */}
//           <option value="arial">Arial</option>
//           <option value="times-new-roman">Times New Roman</option>
//           {/* Add more fonts as needed */}
//         </select>
//       </label>

//       <label className="mb-2 flex w-full items-center gap-4">
//         <span className="min-w-16">Weight</span>
//         <select
//           className="border-gray-00 ml-2 w-full rounded-md border p-2 text-slate-500"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
//         >
//           {/* Add weight options */}
//           <option value="normal">Normal</option>
//           <option value="bold">Bold</option>
//           {/* Add more weight options as needed */}
//         </select>
//       </label>

//       <label className="mb-2 flex w-full items-center gap-1">
//         <span className="min-w-16">Size</span>
//         <input
//           className="border-gray-00 ml-5 w-32 rounded-md border p-2 text-slate-500 outline-none"
//           type="number"
//           placeholder="5"
//           value={size}
//           onChange={handleSizeChange}
//         />
//         <select
//           className="border-gray-00 ml-2 w-full rounded-md border p-2 text-slate-500"
//           value={sizeUnit}
//           onChange={handleSizeUnitChange}
//         >
//           <option value="px">px</option>
//           <option value="rem">rem</option>
//           <option value="em">em</option>
//         </select>
//       </label>

//       <label className="mb-2 flex w-full items-center gap-1">
//         <span className="min-w-16">Height</span>
//         <input
//           className="border-gray-00 ml-5 w-32 rounded-md border p-2 text-slate-500 outline-none"
//           type="number"
//           placeholder="5"
//           value={lineHeight}
//           onChange={handleLineHeightChange}
//         />
//         <select
//           className="border-gray-00 ml-2 w-full rounded-md border p-2 text-slate-500"
//           value={lineHeightUnit}
//           onChange={handleLineHeightUnitChange}
//         >
//           <option value="px">px</option>
//           <option value="rem">rem</option>
//           <option value="em">em</option>
//         </select>
//       </label>

//       <label className="mb-2 flex w-full items-center gap-1">
//         <span className="min-w-16">Color</span>
//         <div className="ml-5 flex gap-3">
//           <div
//             className="flex items-center justify-center rounded-md bg-white p-1"
//             onClick={() => setToggleColorPicker((prev) => !prev)}
//           >
//             <div
//               className={`h-8 w-8 cursor-pointer rounded-md`}
//               style={{ backgroundColor: `${color || '000'}` }}
//             />
//           </div>
//           <input
//             className="border-gray-00 w-full rounded-md border p-2 uppercase text-slate-500 outline-none"
//             type="text"
//             placeholder="#FFF"
//             value={`${color}`}
//             onChange={handleColorInputChange}
//           />
//         </div>
//         <ColorPicker
//           presetColors={presetColors}
//           toggleColorPicker={toggleColorPicker}
//           ref={colorPickerRef}
//         />
//       </label>

//       {/* <label className="mb-2 flex w-full items-center gap-4">
//         <span className="min-w-16">Color</span>
//         <div className="ml-2 flex w-full items-center gap-2 rounded-md bg-white p-1">
//           <div
//             className="h-8 w-8 cursor-pointer rounded-md"
//             style={{ backgroundColor: color }}
//           ></div>
//           <input
//             type="text"
//             value={color}
//             onChange={handleColorInputChange}
//             ref={colorInputRef}
//             className="w-20 rounded-md border p-1 text-slate-500 outline-none"
//           />
//           <div className="uppercase">{rgbColor}</div>
//           <button
//             className="ml-2 rounded-md bg-slate-200 p-1 hover:bg-slate-300"
//             onClick={handleEyedropperClick}
//           >
//             eye
//           </button>
//         </div>
//         <div className="ml-2 flex flex-wrap gap-1">
//           {presetColors.map((option, index) => (
//             <div
//               key={index}
//               className="h-6 w-6 cursor-pointer rounded-full"
//               style={{ backgroundColor: option }}
//               onClick={() => handleColorChange(option)}
//             ></div>
//           ))}
//         </div>
//       </label> */}

//       {/* <label className="mb-2 flex w-full items-center gap-4">
//         <span className="min-w-16">RGB</span>
//         <div className="ml-2 flex w-full items-center gap-2 rounded-md bg-white p-1">
//           <input
//             type="range"
//             min="0"
//             max="255"
//             value={hexToRgb(color)?.r}
//             onChange={(e) => {
//               const newColor = `#${toHex(parseInt(e.target.value, 10))}${color.slice(3, 5)}${color.slice(5, 7)}`
//               handleColorChange(newColor)
//             }}
//             className="w-full"
//           />
//           <input
//             type="range"
//             min="0"
//             max="255"
//             value={hexToRgb(color)?.g}
//             onChange={(e) => {
//               const newColor = `#${color.slice(1, 3)}${toHex(parseInt(e.target.value, 10))}${color.slice(5, 7)}`
//               handleColorChange(newColor)
//             }}
//             className="w-full"
//           />
//           <input
//             type="range"
//             min="0"
//             max="255"
//             value={hexToRgb(color)?.b}
//             onChange={(e) => {
//               const newColor = `#${color.slice(1, 5)}${toHex(parseInt(e.target.value, 10))}`
//               handleColorChange(newColor)
//             }}
//             className="w-full"
//           />
//         </div>
//       </label> */}

//       <label className="mb-2 flex w-full items-center gap-4">
//         <span className="min-w-16">Align</span>
//         <div className="ml-2 flex w-min flex-row justify-between overflow-hidden rounded-md bg-white">
//           <span className="cursor-pointer border-r-2 border-slate-300 p-1 hover:bg-slate-200">
//             <LeftAlign />
//           </span>
//           <span className="cursor-pointer border-r-2 border-slate-300 p-1 hover:bg-slate-200">
//             <CenterAlign />
//           </span>
//           <span className="cursor-pointer border-r-2 border-slate-300 p-1 hover:bg-slate-200">
//             <RightAlign />
//           </span>
//           <span className="cursor-pointer p-1 hover:bg-slate-200">
//             <JustifyAlign />
//           </span>
//         </div>
//       </label>

//       <label className="mb-2 flex w-full items-center gap-4">
//         <span className="min-w-16">Style</span>
//         <div className="ml-2 flex w-min flex-row justify-between overflow-hidden rounded-md bg-white">
//           <span className="flex cursor-pointer items-center border-r-2 border-slate-300 p-1 hover:bg-slate-200">
//             <CircleXFilledIcon />
//           </span>
//           <span className="flex cursor-pointer items-center border-r-2 border-slate-300 p-1 hover:bg-slate-200">
//             <ItalicIcon />
//           </span>
//           <span className="flex cursor-pointer items-center border-r-2 border-slate-300 p-1 hover:bg-slate-200">
//             <BoldIcon />
//           </span>
//           <span className="cursor-pointer p-1 px-2.5 text-xl text-slate-500 line-through hover:bg-slate-200">
//             T
//           </span>
//         </div>
//       </label>
//     </div>
//   )
// }

// export default Typography
