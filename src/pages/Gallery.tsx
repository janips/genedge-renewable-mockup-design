import React from 'react';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

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
}, {
  src: "/lovable-uploads/01d55dc9-543b-41af-8af2-6b0ae3e4fc4d.png",
  alt: "Solar panel maintenance team"
}, {
  src: "/lovable-uploads/8dd7cbb8-baa7-458d-9f87-d2b80406bad5.png",
  alt: "Rows of solar panels in sunlight"
}, {
  src: "/lovable-uploads/ae04a0b0-3972-4523-9d84-51eb46096c6a.png",
  alt: "Drone view of completed solar field"
}, {
  src: "/lovable-uploads/6d77f475-a6fd-4a1d-ade9-6375311f1e2f.png",
  alt: "Large solar installation with monitoring tower"
}, {
  src: "/lovable-uploads/ba424455-22e6-4d3f-aa96-581a1dffa848.png",
  alt: "Aerial view of solar farm in agricultural landscape"
}, {
  src: "/lovable-uploads/2fcb85d0-6490-4ab2-bcab-e29b9f0bfe86.png",
  alt: "Ground-mounted solar panels in organized rows"
}, {
  src: "/lovable-uploads/13de4ada-26ef-4ef9-858f-76a98c2ed327.png",
  alt: "Panoramic view of solar park installation"
}, {
  src: "/lovable-uploads/a6353e8e-abc7-4bac-9554-996b026179a7.png",
  alt: "Solar facility with electrical infrastructure and control systems"
}, {
  src: "/lovable-uploads/ccc2fd83-f49f-47a4-8e53-a778b0393e42.png",
  alt: "Rural solar installation surrounded by agricultural fields"
}, {
  src: "/lovable-uploads/527357e9-133f-4f76-a550-bf1927564090.png",
  alt: "Large-scale solar array with construction area visible"
}];

const Gallery = () => {
  return <Layout>
      <PageBanner 
        title="Project Gallery"
        subtitle="Explore Our Renewable Energy Projects"
        backgroundImage="/lovable-uploads/ae04a0b0-3972-4523-9d84-51eb46096c6a.png"
      />
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
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
                    
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};

export default Gallery;
