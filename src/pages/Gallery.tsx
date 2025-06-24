
import React from 'react';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Images for Devki Galol project
const devkiGalolImages = [
  {
    src: "/lovable-uploads/dab48858-b3f6-4e71-9ccb-1bfb9720c267.png",
    alt: "Devki Galol - Control panel and electrical equipment monitoring systems"
  },
  {
    src: "/lovable-uploads/63bbd7f3-7a9e-43a2-9883-db301ba3066f.png",
    alt: "Devki Galol - Electrical substation with power transmission infrastructure"
  },
  {
    src: "/lovable-uploads/e951c5ad-d2de-41c7-b63f-230ddab14888.png",
    alt: "Devki Galol - Aerial view of solar installation in agricultural landscape"
  },
  {
    src: "/lovable-uploads/8cfc1260-ea50-4128-826d-dbae42da1fe7.png",
    alt: "Devki Galol - Ground-mounted solar panels arranged in organized rows"
  },
  {
    src: "/lovable-uploads/3500bf95-de98-4c1d-8f22-ae8b21f8e6bd.png",
    alt: "Devki Galol - Solar farm installation with surrounding agricultural fields"
  },
  {
    src: "/lovable-uploads/e78f7cc5-39cc-4491-84ce-f87e4f192657.png",
    alt: "Devki Galol - Large-scale solar array with systematic panel arrangement"
  },
  {
    src: "/lovable-uploads/dfe95110-4b40-4147-a950-7e161c1b336c.png",
    alt: "Devki Galol - Solar panel mounting structure during construction phase"
  },
  {
    src: "/lovable-uploads/f998342d-8ccd-42a0-8ae9-96734b77736a.png",
    alt: "Devki Galol - Solar panels at sunset showcasing clean energy generation"
  }
];

// Images for Kanja project
const kanjaImages = [
  {
    src: "/lovable-uploads/1ac8b543-79ef-4350-b615-7349dbd79a66.png",
    alt: "Kanja - Aerial view of solar installation with landscape"
  },
  {
    src: "/lovable-uploads/3a14f0c0-88fe-48d0-addf-925b4e58237a.png",
    alt: "Kanja - Solar field with electrical infrastructure and control systems"
  },
  {
    src: "/lovable-uploads/aab96177-158a-4247-b864-e91372e0dda1.png",
    alt: "Kanja - Large-scale solar farm with organized panel arrangement"
  },
  {
    src: "/lovable-uploads/636f6cbd-f874-4a11-ad4d-149f893348af.png",
    alt: "Kanja - Solar installation with transmission tower and monitoring equipment"
  },
  {
    src: "/lovable-uploads/e914f0b4-a57e-480f-9deb-52914f01457a.png",
    alt: "Kanja - Aerial view of dual solar installations in agricultural setting"
  },
  {
    src: "/lovable-uploads/fa25af84-b198-47c4-9b42-46b8303bf401.png",
    alt: "Kanja - Construction workers installing solar panel mounting structures"
  },
  {
    src: "/lovable-uploads/68046839-d551-4a31-a5a4-2fb3e6bd0dd1.png",
    alt: "Kanja - Heavy electrical equipment and transformer installation"
  },
  {
    src: "/lovable-uploads/5f63d327-97be-48b1-b7d2-51c5e375dda2.png",
    alt: "Kanja - Workers performing maintenance on solar panel installation"
  },
  {
    src: "/lovable-uploads/b1dc59d0-8b79-445d-b491-ddad95cb4882.png",
    alt: "Kanja - Ground preparation and foundation work for solar panels"
  },
  {
    src: "/lovable-uploads/181e0207-17b9-4563-8baf-8fc0e785b47c.png",
    alt: "Kanja - Construction team assembling solar panel mounting frameworks"
  }
];

// Images for Mandodara project
const mandodaraImages = [
  {
    src: "/lovable-uploads/5916dabc-1c45-4c66-9c47-6d15451c706a.png",
    alt: "Mandodara - Aerial view of solar farm installation in agricultural landscape"
  },
  {
    src: "/lovable-uploads/3852c6f0-13ab-4119-a57a-455d6a45d869.png",
    alt: "Mandodara - Large-scale solar array with systematic panel arrangement"
  },
  {
    src: "/lovable-uploads/894f950a-32d2-4474-a482-de37fca44b5f.png",
    alt: "Mandodara - Project site landscape with green fields and infrastructure"
  },
  {
    src: "/lovable-uploads/78bc16de-e2b9-4e07-9e48-47caa558e4a4.png",
    alt: "Mandodara - Control panel and electrical monitoring systems"
  },
  {
    src: "/lovable-uploads/956f0b0e-86d5-471f-bbd2-d438304e3256.png",
    alt: "Mandodara - Solar panel mounting structure during construction phase"
  },
  {
    src: "/lovable-uploads/a77e0aeb-5157-4b93-80e8-707bdb15da46.png",
    alt: "Mandodara - Construction materials and equipment preparation"
  },
  {
    src: "/lovable-uploads/3636a1f3-8b4f-428b-aba6-44e035969b5a.png",
    alt: "Mandodara - Electrical substation with power transmission infrastructure"
  },
  {
    src: "/lovable-uploads/298d7d8c-df9b-48be-a15d-cbfaa65eaf47.png",
    alt: "Mandodara - Foundation work and ground preparation for solar installation"
  },
  {
    src: "/lovable-uploads/52a6746f-0e2d-4657-866b-4f7322a80f80.png",
    alt: "Mandodara - Solar panel foundation and mounting structure installation"
  },
  {
    src: "/lovable-uploads/11085c0e-ef8a-4d6c-9446-d5a255074431.png",
    alt: "Mandodara - Workers installing solar panels on mounting structures"
  }
];

// Images for Mendapara project
const mendaparaImages = [
  {
    src: "/lovable-uploads/63c5794f-39a4-4f7e-98ae-c6369568c6b6.png",
    alt: "Mendapara - Aerial view of solar farm installation in agricultural landscape"
  },
  {
    src: "/lovable-uploads/f2447aff-ac1c-4331-ba9d-7ef419c5ed30.png",
    alt: "Mendapara - Large-scale solar array with systematic panel arrangement"
  },
  {
    src: "/lovable-uploads/b9891d1c-414b-4139-8cf3-d08f4b6d75ad.png",
    alt: "Mendapara - Solar installation overview with surrounding agricultural fields"
  },
  {
    src: "/lovable-uploads/0ca53fcd-4425-4c4e-8ba6-01ef4c7ff4e0.png",
    alt: "Mendapara - Project perimeter fencing at sunset"
  },
  {
    src: "/lovable-uploads/ad1e95b2-480f-4888-9a4f-242b35d68fed.png",
    alt: "Mendapara - Team survey and site preparation with mountain backdrop"
  },
  {
    src: "/lovable-uploads/3ef6f9ee-f851-4f20-94dc-bcb22ae087bb.png",
    alt: "Mendapara - Agricultural landscape and project site preparation"
  },
  {
    src: "/lovable-uploads/6b3464ec-c00b-4500-8c0f-3ffd913d0ca9.png",
    alt: "Mendapara - Foundation and concrete reinforcement work"
  },
  {
    src: "/lovable-uploads/47703f98-a03b-444b-9568-6cb930884e2d.png",
    alt: "Mendapara - Solar panel mounting structure installation and assembly"
  }
];

const Gallery = () => {
  return (
    <Layout>
      <PageBanner 
        title="Project Gallery"
        subtitle="Explore Our Renewable Energy Projects"
        backgroundImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 leading-relaxed text-center">
                Explore real-life highlights from Genedge projects: from sweeping aerial views of solar fields to hands-on technical details and teamwork. This gallery showcases how we deliver clean energy—at every stage of the journey.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <Tabs defaultValue="devki-galol" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-gray-100">
                  <TabsTrigger 
                    value="devki-galol" 
                    className="data-[state=active]:bg-genedge-green data-[state=active]:text-white hover:bg-genedge-orange hover:text-white transition-colors"
                  >
                    Devki Galol
                  </TabsTrigger>
                  <TabsTrigger 
                    value="kanja"
                    className="data-[state=active]:bg-genedge-green data-[state=active]:text-white hover:bg-genedge-orange hover:text-white transition-colors"
                  >
                    Kanja
                  </TabsTrigger>
                  <TabsTrigger 
                    value="mandodara"
                    className="data-[state=active]:bg-genedge-green data-[state=active]:text-white hover:bg-genedge-orange hover:text-white transition-colors"
                  >
                    Mandodara
                  </TabsTrigger>
                  <TabsTrigger 
                    value="mendapara"
                    className="data-[state=active]:bg-genedge-green data-[state=active]:text-white hover:bg-genedge-orange hover:text-white transition-colors"
                  >
                    Mendapara
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="devki-galol" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {devkiGalolImages.map((img, i) => (
                      <div key={i} className="group relative rounded-xl overflow-hidden shadow transition hover:shadow-xl bg-white">
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          loading="lazy" 
                          className="w-full h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <p className="text-white text-sm text-center px-4">{img.alt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="kanja" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {kanjaImages.map((img, i) => (
                      <div key={i} className="group relative rounded-xl overflow-hidden shadow transition hover:shadow-xl bg-white">
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          loading="lazy" 
                          className="w-full h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <p className="text-white text-sm text-center px-4">{img.alt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="mandodara" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {mandodaraImages.map((img, i) => (
                      <div key={i} className="group relative rounded-xl overflow-hidden shadow transition hover:shadow-xl bg-white">
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          loading="lazy" 
                          className="w-full h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <p className="text-white text-sm text-center px-4">{img.alt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="mendapara" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {mendaparaImages.map((img, i) => (
                      <div key={i} className="group relative rounded-xl overflow-hidden shadow transition hover:shadow-xl bg-white">
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          loading="lazy" 
                          className="w-full h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <p className="text-white text-sm text-center px-4">{img.alt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
