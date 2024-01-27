import card from "../../assets/images/static-component-images/card.jpg";

const Card = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-soft w-[15rem] xs:w-[20rem] text-center absolute top-40 sm:top-[12rem] right-4 z-10">
      <img
        src={card}
        alt="Card Image"
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <h2 className="text-lg xs:text-xl font-bold mb-2 text-black">
        Card Title
      </h2>
      <p className="text-gray-600 text-sm sm:text-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button className="mt-4 text-gray-500 px-4 py-2 rounded-md border-2 border-gray-400 text-sm xs:text-md">
        View Details
      </button>
    </div>
  );
};

export default Card;
