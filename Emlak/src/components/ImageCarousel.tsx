import { HeartIcon } from "lucide-react";
import { useState } from "react";

type Props = {
  images: string[];
};

const ImageCarousel = ({ images }: Props) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[50vh] overflow-hidden rounded-xl shadow group">
      <img
        src={images[current]}
        alt={`Slide ${current}`}
        className="w-full h-full object-cover sm:object-contain transition-all duration-700 ease-in-out"
      />

      {/* Sol ok */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white text-2xl px-3 py-2 rounded hover:bg-black group-hover:opacity-100 opacity-0 transition"
      >
        ‹
      </button>

      {/* Sağ ok */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white text-2xl px-3 py-2 rounded hover:bg-black group-hover:opacity-100 opacity-0 transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
            current === index ? 'bg-green-600' : 'bg-gray-300'
        }`}
        />
      ))}
      </div>
      <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-green-100 transition">
        <HeartIcon className="text-green-600 w-5 h-5" />
      </button>


    </div>
  );
};

export default ImageCarousel;
