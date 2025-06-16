import Image from "next/image";

export default function LocationCard({ city, image, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden fade-in">
      <Image src={image || "/placeholder.svg"} alt={city} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="font-display text-xl font-bold mb-2 text-gray-900">{city}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}
