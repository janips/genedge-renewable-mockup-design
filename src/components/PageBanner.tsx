
import React from 'react';
interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: string;
  textAlign?: 'left' | 'center' | 'right';
}
const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  height = "h-64",
  textAlign = "center"
}) => {
  const alignmentClasses = {
    left: "justify-start text-left",
    center: "justify-center text-center",
    right: "justify-end text-right"
  };
  return <div className={`relative ${height} bg-cover bg-center bg-no-repeat flex items-center ${alignmentClasses[textAlign]}`} style={{
    backgroundImage: `url(${backgroundImage})`
  }}>
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative z-10 text-white px-4 max-w-4xl mx-auto w-full">
        <div className="bg-black bg-opacity-50 rounded-lg p-6 backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl opacity-90 text-white">{subtitle}</p>}
        </div>
      </div>
    </div>;
};
export default PageBanner;
