
import React from 'react';
import Layout from '../components/Layout';

// Use only the 6 newly uploaded user images, with descriptive alt text
const uploadedImages = [
  {
    src: "/lovable-uploads/97762ca3-a496-4200-a78c-e0660922c660.png",
    alt: "Team members at site with electrical panels and open doors"
  },
  {
    src: "/lovable-uploads/4b71101e-2e4b-4968-9a02-1492571fd4d7.png",
    alt: "Wide view of solar farm under cloudy sky"
  },
  {
    src: "/lovable-uploads/c77a4bd4-0e26-452e-834c-64ba1d8ce410.png",
    alt: "Transformers and control equipment at solar site"
  },
  {
    src: "/lovable-uploads/8ec0f678-a63b-4d8f-8c1d-803416069ded.png",
    alt: "Aerial view of solar park and fields"
  },
  {
    src: "/lovable-uploads/fefedaf2-3837-4073-a2ff-87b819eb3020.png",
    alt: "Top down view of solar panels and farmland"
  },
  {
    src: "/lovable-uploads/b70860da-0b55-4804-a85c-6e58d2ed3c4b.png",
    alt: "Solar arrays with monitoring pole"
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

