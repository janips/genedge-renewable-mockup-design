import React from 'react';
import Layout from '../components/Layout';

// Manually uploaded images (excluding obvious logo files)
// If you upload more in future, add their src/alt here.
const uploadedImages = [{
  src: "/lovable-uploads/97762ca3-a496-4200-a78c-e0660922c660.png",
  alt: "Team members at site with electrical panels and open doors"
}, {
  src: "/lovable-uploads/4b71101e-2e4b-4968-9a02-1492571fd4d7.png",
  alt: "Wide view of solar farm under cloudy sky"
}, {
  src: "/lovable-uploads/c77a4bd4-0e26-452e-834c-64ba1d8ce410.png",
  alt: "Transformers and control equipment at solar site"
}, {
  src: "/lovable-uploads/8ec0f678-a63b-4d8f-8c1d-803416069ded.png",
  alt: "Aerial view of solar park and fields"
}, {
  src: "/lovable-uploads/fefedaf2-3837-4073-a2ff-87b819eb3020.png",
  alt: "Top down view of solar panels and farmland"
}, {
  src: "/lovable-uploads/b70860da-0b55-4804-a85c-6e58d2ed3c4b.png",
  alt: "Solar arrays with monitoring pole"
},
// Add more non-logo images here, with descriptive alt text:
{
  src: "/lovable-uploads/01d55dc9-543b-41af-8af2-6b0ae3e4fc4d.png",
  alt: "Solar panel maintenance team"
},
// {
//   src: "/lovable-uploads/57c95102-e4ea-40c4-8c7a-cbc002b780c8.png",
//   alt: "Large solar array and technical crew on site"
// },
// {
//   src: "/lovable-uploads/7e0d13de-07d5-416e-94fb-c893368715f1.png",
//   alt: "Electrical substation for solar power"
// },
{
  src: "/lovable-uploads/8dd7cbb8-baa7-458d-9f87-d2b80406bad5.png",
  alt: "Rows of solar panels in sunlight"
},
// Removed index 11
// {
//   src: "/lovable-uploads/9c1e06fa-ffb9-4b41-befa-898b7fd97a22.png",
//   alt: "Sunset over operational solar park"
// },
{
  src: "/lovable-uploads/ae04a0b0-3972-4523-9d84-51eb46096c6a.png",
  alt: "Drone view of completed solar field"
}];
const Gallery = () => {
  return <Layout>
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">
            Project Gallery&nbsp;
            
          </h1>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 leading-relaxed text-center">
                Explore real-life highlights from Genedge projects: from sweeping aerial views of solar fields to hands-on technical details and teamwork. This gallery showcases how we deliver clean energy—at every stage of the journey.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {uploadedImages.map((img, i) => <div key={i} className="group relative rounded-xl overflow-hidden shadow transition hover:shadow-xl bg-white">
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-base font-semibold drop-shadow text-center px-2">
                      {img.alt}
                    </span>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Gallery;