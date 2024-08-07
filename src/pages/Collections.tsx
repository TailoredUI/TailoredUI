import CollectionCard from '../components/Reusable/CollectionCard/CollectionCard'
import buttonImg from '../assets/images/button-collection.png'
import cardImg from '../assets/images/card-collection.jpg'
import { useNavigate } from 'react-router-dom'

const collectionsData = [
  { id: 1, title: 'Buttons', imageSrc: buttonImg },
  { id: 2, title: 'Cards', imageSrc: cardImg },
]

const Collections = () => {
  const navigate = useNavigate()

  const handleCollectionClick = (collectionName: string) => {
    navigate(`${collectionName}`)
  }

  return (
    <>
      <div>
        <h1 className="mt-16 text-center text-5xl font-bold">
          Tailor UI Collections: Elevate Your Design with Customizable
          Components!
        </h1>
      </div>
      <div>
        <p className="mx-auto mt-8 w-[80%] text-center text-xl">
          Certainly! Here&apos;s a brief description that you can use at the top
          of the Collections Page: Welcome to the Collections Page! Explore
          Tailor UI&apos;s curated collections of pre-designed components,
          meticulously crafted to enhance your web development experience. From
          buttons and forms to cards and modals, each collection offers a set of
          reusable components designed to streamline your project&apos;s UI
          development. Dive into the collections below and discover the perfect
          components for your next project.
        </p>
      </div>
      <section className="mt-16 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {collectionsData.map((collection) => (
          <CollectionCard
            key={collection.id}
            title={collection.title}
            imageSrc={collection.imageSrc}
            onClick={() =>
              handleCollectionClick(collection.title.toLowerCase())
            }
          />
        ))}
      </section>
    </>
  )
}

export default Collections
