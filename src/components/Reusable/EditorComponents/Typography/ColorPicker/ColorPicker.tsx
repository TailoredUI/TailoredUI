// import React, { forwardRef, useState } from 'react'

// type ColorPickerProps = {
//   initialColor?: string
//   presetColors?: string[]
//   toggleColorPicker?: boolean
//   ref?: React.RefObject<HTMLElement> | null
// }

// const ColorPicker: React.FC<ColorPickerProps> = forwardRef(
//   ({ initialColor = '#000000', presetColors, toggleColorPicker }, ref) => {
//     const [color, setColor] = useState(initialColor)
//     const rgb = hexToRgb(color)
//     const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b)
//     const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

//     const handleChange = (
//       newColor: {
//         hex?: string
//         r?: number
//         g?: number
//         b?: number
//         a?: number
//       },
//       e?: React.ChangeEvent<HTMLInputElement>
//     ) => {
//       if (newColor.hex) {
//         setColor(newColor.hex)
//       } else {
//         const { r = rgb.r, g = rgb.g, b = rgb.b, a = rgb.a } = newColor
//         const newRgb = { r, g, b, a }
//         setColor(`#${rgbToHex(newRgb.r, newRgb.g, newRgb.b, newRgb.a)}`)
//       }
//     }

//     return toggleColorPicker ? (
//       <div
//         className="absolute -left-[334px] top-0 box-border flex h-60 w-80 items-center justify-center rounded-md bg-[#292856] p-2 shadow-md"
//         ref={ref}
//       >
//         <div className="h-full w-full bg-gradient-to-b from-white from-0% via-red-600/60 via-40% to-transparent to-100%"/>
//         {/* <div className="mb-4">
//         <Fields
//           rgb={rgb}
//           hsl={hsl}
//           hex={color}
//           onChange={handleChange}
//           disableAlpha={false}
//         />
//       </div>
//       <div>
//         <PresetColors
//           colors={presetColors || []}
//           onClick={handleChange as () => void}
//         />
//       </div> */}
//       </div>
//     ) : null
//   }
// )

// // Helper functions for color conversions
// function hexToRgb(hex: string): { r: number; g: number; b: number; a: number } {
//   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(
//     hex
//   )

//   return result
//     ? {
//       r: parseInt(result[1], 16),
//       g: parseInt(result[2], 16),
//       b: parseInt(result[3], 16),
//       a: result[4] ? parseInt(result[4], 16) / 255 : 1,
//     }
//     : { r: 0, g: 0, b: 0, a: 1 }
// }

// function rgbToHex(r: number, g: number, b: number, a: number = 1): string {
//   const hexR = Math.round(r).toString(16).padStart(2, '0')
//   const hexG = Math.round(g).toString(16).padStart(2, '0')
//   const hexB = Math.round(b).toString(16).padStart(2, '0')
//   const hexA = Math.round(a * 255)
//     .toString(16)
//     .padStart(2, '0')

//   return `#${hexR}${hexG}${hexB}${hexA}`
// }

// function rgbToHsv(
//   r: number,
//   g: number,
//   b: number
// ): { h: number; s: number; v: number } {
//   const max = Math.max(r, g, b)
//   const min = Math.min(r, g, b)
//   const value = max
//   const saturation = max === 0 ? 0 : (max - min) / max
//   let hue

//   if (max === min) {
//     hue = 0
//   } else if (max === r) {
//     hue = ((g - b) / (max - min)) % 6
//   } else if (max === g) {
//     hue = (b - r) / (max - min) + 2
//   } else {
//     hue = (r - g) / (max - min) + 4
//   }

//   hue = Math.round(hue * 60)
//   if (hue < 0) {
//     hue += 360
//   }

//   return { h: hue, s: saturation, v: value }
// }

// function rgbToHsl(
//   r: number,
//   g: number,
//   b: number
// ): { h: number; s: number; l: number } {
//   const max = Math.max(r, g, b)
//   const min = Math.min(r, g, b)
//   const l = (max + min) / 2
//   let h, s

//   if (max === min) {
//     h = s = 0
//   } else {
//     const delta = max - min
//     s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min)
//     switch (max) {
//     case r:
//       h = (g - b) / delta + (g < b ? 6 : 0)
//       break
//     case g:
//       h = (b - r) / delta + 2
//       break
//     case b:
//       h = (r - g) / delta + 4
//       break
//     }
//     h /= 6
//   }

//   return {
//     h: Math.round(h * 360),
//     s: Math.round(s * 100),
//     l: Math.round(l * 100),
//   }
// }

// export default ColorPicker
