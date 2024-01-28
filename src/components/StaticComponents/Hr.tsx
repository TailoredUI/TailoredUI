const Hr = ({ className }: { className: string }) => {
  return (
    <hr
      className={`h-[0.15rem] min-w-4 border-none bg-gradient-to-r from-transparent via-[#7095FC] to-transparent outline-none ${className}`}
    />
  )
}

export default Hr
