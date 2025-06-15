
import React from 'react';
import Layout from '../components/Layout';

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
  }
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
                Explore some real-life highlights from our renewable energy projects. Each image reflects our dedication, technology, and people powering India's clean energy future.
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
                  {/* Optional overlay on hover */}
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

