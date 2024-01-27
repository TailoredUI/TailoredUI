const Hr = ({ className }: { className: string }) => {
  return (
    <hr
      className={`bg-gradient-to-r from-transparent via-[#7095FC] to-transparent min-w-4 h-[0.15rem] outline-none border-none ${className}`}
    />
  );
};

export default Hr;
