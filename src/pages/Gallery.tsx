
import React from 'react';
import Layout from '../components/Layout';

// 13 total: 6 old + 7 new
const uploadedImages = [
  {
    src: "/lovable-uploads/36feefda-9010-4332-ad14-e26b34075e95.png",
    alt: "Team on project site"
  },
  {
    src: "/lovable-uploads/8dd7cbb8-baa7-458d-9f87-d2b80406bad5.png",
    alt: "Aerial solar field 1"
  },
  {
    src: "/lovable-uploads/858ffaca-d9cc-4565-9a10-abf1267b6c7a.png",
    alt: "Aerial solar field 2"
  },
  {
    src: "/lovable-uploads/57c95102-e4ea-40c4-8a7b-cbc002b780c8.png",
    alt: "Solar panel, equipment and crew"
  },
  {
    src: "/lovable-uploads/ae04a0b0-3972-4523-9d84-51eb46096c6a.png",
    alt: "Aerial solar field 3"
  },
  {
    src: "/lovable-uploads/01d55dc9-543b-41af-8af2-6b0ae3e4fc4d.png",
    alt: "Team at PM-KUSUM project sign"
  },
  // New images from most recent user uploads (sample alt text, you can adjust as descriptive as you want)
  {
    src: "/lovable-uploads/7e0d13de-07d5-416e-94fb-c893368715f1.png",
    alt: "Control room with electrical panels"
  },
  {
    src: "/lovable-uploads/9c1e06fa-ffb9-4b41-befa-898b7fd97a22.png",
    alt: "Team at solar facility"
  },
  {
    src: "/lovable-uploads/photo-1500673922987-e212871fec22.jpg",
    alt: "Solar field landscape with yellow lights"
  },
  {
    src: "/lovable-uploads/photo-1470071459604-3b5ec3a7fe05.jpg",
    alt: "Foggy mountain summit with distant view (placeholder)"
  },
  {
    src: "/lovable-uploads/photo-1506744038136-46273834b3fb.jpg",
    alt: "Body of water surrounded by trees (placeholder)"
  },
  {
    src: "/lovable-uploads/photo-1615729947596-a598e5de0ab3.jpg",
    alt: "Green grass and gray rocky mountain (placeholder)"
  },
  {
    src: "/lovable-uploads/photo-1487887235947-a955ef187fcc.jpg",
    alt: "White DJI drone in mid air (placeholder)"
  },
];

const Gallery = () => {
  return (
    <Layout>
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Project Gallery</h1>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 leading-relaxed text-center">
                Explore real-life highlights from Genedge projects: from sweeping aerial views of solar fields to hands-on technical details and teamwork. This gallery showcases how we deliver clean energy—at every stage of the journey.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {uploadedImages.map((img, i) => (
                <div
                  key={i}
                  className="group relative rounded-xl overflow-hidden shadow transition hover:shadow-xl hover-scale bg-white"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-base font-semibold drop-shadow">
                      {img.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
