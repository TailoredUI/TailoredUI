interface InterfaceFeatureCard {
  title: string;
  desc: string;
  children: React.ReactNode;
}

const FeatureCard = ({ children, title, desc }: InterfaceFeatureCard) => {
  return (
    <div className="rounded-xl p-8 text-left border hover:bg-[#FFFFFF0B]">
      <div className="mb-3">{children}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default FeatureCard;
