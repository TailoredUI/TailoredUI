import card from '../../assets/images/static-component-images/card.jpg'

const Card = () => {
  return (
    <div className="absolute right-4 top-40 z-10 w-[15rem] rounded-lg bg-white p-4 text-center shadow-soft xs:w-[20rem] sm:top-[12rem]">
      <img
        src={card}
        alt="Card Image"
        className="mb-4 h-40 w-full rounded-md object-cover"
      />
      <h2 className="mb-2 text-lg font-bold text-black xs:text-xl">
        Card Title
      </h2>
      <p className="sm:text-md text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button className="xs:text-md mt-4 rounded-md border-2 border-gray-400 px-4 py-2 text-sm text-gray-500">
        View Details
      </button>
    </div>
  )
}

export default Card
