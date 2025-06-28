import PinterestGallery from '@/components/sections/pinterest-gallery';
import React from 'react';

const GalleryPage = () => {
  const imagesByCategory = [
    {
      title: "Health Facilities",
      images: [
        "/images/facility1.jpg",
        "/images/facility2.jpg",
        "/images/facility3.jpg",
        "/images/facility4.jpg",
      ],
    },
    {
      title: "Community Outreach",
      images: [
        "/images/outreach1.jpg",
        "/images/outreach2.jpg",
        "/images/outreach3.jpg",
      ],
    },
    {
      title: "Staff Members",
      images: [
        "/images/staff1.jpg",
        "/images/staff2.jpg",
      ],
    },
    {
      title: "Health Campaigns",
      images: [
        "/images/campaign1.jpg",
        "/images/campaign2.jpg",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Gallery</h1>
      <div className="space-y-12">
        {imagesByCategory.map((cat, idx) => (
          <div key={cat.title}>
            <h2 className="text-xl font-semibold mb-4 text-primary">{cat.title}</h2>
            <PinterestGallery images={cat.images} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
