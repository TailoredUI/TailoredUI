interface InterfaceFeatureCard {
  title: string
  desc: string
  children: React.ReactNode
  className?: string
}

const FeatureCard = ({
  children,
  title,
  desc,
  className,
}: InterfaceFeatureCard) => {
  return (
    <div
      className={`rounded-xl border p-8 text-left hover:bg-[#FFFFFF0B] ${className}`}
    >
      <div className="mb-3">{children}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default FeatureCard
