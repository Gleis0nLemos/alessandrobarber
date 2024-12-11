
export default function Gallery() {
  const images = [
    "/assets/gallery/image1.jpg",
    "/assets/gallery/image2.jpg",
    "/assets/gallery/image3.jpg",
    "/assets/gallery/image4.jpg",
    "/assets/gallery/image5.jpg",
    "/assets/gallery/image6.jpg",
    "/assets/gallery/image7.jpg",
    "/assets/gallery/image8.jpg",
    "/assets/gallery/image9.jpg",
  ];

  return (
    <div className="px-1 pt-6 border-t border-zinc-900">
      <div className="pb-4">
        <h2 className="text-2xl font-semibold mb-2 pb-2">Galeria</h2>
        <p className="text-sm font-medium text-gray-400">Confira abaixo um pouco do nosso trabalho</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-auto object-cover rounded-lg shadow-md hover:"
          />
        ))}
      </div>
    </div>
  );
}
