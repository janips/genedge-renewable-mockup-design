
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <SEO 
        title="Page Not Found - 404 Error" 
        description="The page you're looking for cannot be found. Return to Genedge Renewables homepage to explore our renewable energy solutions and services."
        keywords="404 error, page not found, Genedge Renewables"
        url={location.pathname}
      />
      <div className="min-h-[70vh] flex items-center justify-center bg-genedge-light-gray">
        <div className="text-center px-4">
          <div className="inline-block p-6 bg-white rounded-full shadow-md mb-6">
            <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-genedge-green to-genedge-orange">
              404
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            We're sorry, the page you're looking for cannot be found. Please check the URL or navigate back to our homepage.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-genedge-green text-white rounded-md font-medium hover:bg-opacity-90 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
