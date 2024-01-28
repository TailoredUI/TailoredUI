const Radio = () => {
  return (
    <label
      htmlFor="toggle"
      className="absolute right-[16.5rem] top-[26rem] z-10 h-8 w-14 rotate-90 cursor-pointer rounded-2xl p-1 [-webkit-tap-highlight-color:_transparent] xs:right-[21.7rem] sm:right-96 sm:top-80 sm:rotate-0"
    >
      <input type="checkbox" id="toggle" className="peer sr-only" />
      <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500" />

      <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6" />
    </label>
  )
}

export default Radio
