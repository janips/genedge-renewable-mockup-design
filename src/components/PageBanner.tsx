import React from 'react';
interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: string;
}
const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  height = "h-64"
}) => {
  return <div className={`relative ${height} bg-cover bg-center bg-no-repeat flex items-center justify-center`} style={{
    backgroundImage: `url(${backgroundImage})`
  }}>
      <div className="absolute inset-0 bg-transparent"></div>
      <div className="absolute z-10 text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 text-center">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl opacity-90 text-gray-800">{subtitle}</p>}
      </div>
    </div>;
};
export default PageBanner;