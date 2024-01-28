const Radio = () => {
  return (
    <label
      htmlFor="toggle"
      className="absolute top-[26rem] sm:top-80 right-[16.5rem] xs:right-[21.7rem] sm:right-96 rounded-2xl w-14 h-8 p-1 rotate-90 sm:rotate-0 z-10 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
    >
      <input type="checkbox" id="toggle" className="peer sr-only" />
      <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500" />

      <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6" />
    </label>
  );
};

   
     export default Radio;
