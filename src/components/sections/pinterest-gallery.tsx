import React from 'react';

interface PinterestGalleryProps {
  images: string[];
}

const PinterestGallery: React.FC<PinterestGalleryProps> = ({ images }) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
      {images.map((image, index) => (
        <div
          className="mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-lg bg-white/70 dark:bg-zinc-900/70 backdrop-blur"
          key={index}
        >
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full object-cover transition-transform duration-200 hover:scale-105 hover:shadow-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default PinterestGallery;
