import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React, { useState } from 'react';

interface ImagePreviewsProps {
  images: string[];
}

const ImagePreviews: React.FC<ImagePreviewsProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative h-[450px] w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentImageIndex
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={image}
            alt={`Property image ${index + 1}`}
            className="object-cover w-full h-full cursor-pointer transition-transform duration-500 ease-in-out"
          />
        </div>
      ))}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <FaChevronLeft className="text-white w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white transition-all cursor-pointer"
            aria-label="Next image"
          >
            <FaChevronRight className="text-white w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
};

export default ImagePreviews;
