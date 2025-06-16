
import React, { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Project {
  project: string;
  x: number;
  y: number;
  status: string;
  mwp: number;
  link: string;
}

const ProjectMapInteractive: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    { "project": "Devki Galol", "x": 187, "y": 606, "status": "Commissioned", "mwp": 2.4, "link": "https://maps.google.com/?q=21.6224386,70.6947651" },
    { "project": "Mendapara", "x": 182, "y": 608, "status": "Commissioned", "mwp": 2.4, "link": "https://maps.google.com/?q=21.5941624,70.6120839" },
    { "project": "Mandodara", "x": 154, "y": 621, "status": "Commissioned", "mwp": 2.4, "link": "https://maps.google.com/?q=21.4114499,70.1505678" },
    { "project": "Kanja", "x": 163, "y": 619, "status": "Commissioned", "mwp": 4.8, "link": "https://maps.google.com/?q=21.4379612,70.2979446" },
    { "project": "Mandawri", "x": 444, "y": 372, "status": "Under Construction", "mwp": 2.25, "link": "https://maps.google.com/?q=24.963690,74.963438" },
    { "project": "Jiva ka Kheda", "x": 442, "y": 353, "status": "Under Construction", "mwp": 2.33, "link": "https://maps.google.com/?q=25.233486,74.931434" },
    { "project": "Sudri", "x": 419, "y": 366, "status": "Under Construction", "mwp": 2.54, "link": "https://maps.google.com/?q=25.051228,74.546043" },
    { "project": "Sheradi", "x": 153, "y": 609, "status": "Under Development", "mwp": 2.2, "link": "https://maps.google.com/?q=21.5867409,70.1330840" },
    { "project": "Satapar", "x": 202, "y": 586, "status": "Under Development", "mwp": 2.2, "link": "https://maps.google.com/?q=21.907222,70.943889" },
    { "project": "Sarpdad", "x": 182, "y": 555, "status": "Under Development", "mwp": 2.2, "link": "https://maps.google.com/?q=22.352222,70.610556" },
    { "project": "Gokhlana", "x": 222, "y": 582, "status": "Under Development", "mwp": 1.65, "link": "https://maps.google.com/?q=21.972500,71.271667" },
    { "project": "GUVNL", "x": 261, "y": 595, "status": "Under Development", "mwp": 340.2, "link": "https://maps.google.com/?q=21.790002,71.928013" },
    { "project": "Bhujela", "x": 318, "y": 399, "status": "Under Development", "mwp": 2, "link": "https://maps.google.com/?q=24.583111,72.871083" },
    { "project": "Bant", "x": 282, "y": 400, "status": "Under Development", "mwp": 4, "link": "https://maps.google.com/?q=24.574278,72.275694" },
    { "project": "Anadara", "x": 305, "y": 395, "status": "Under Development", "mwp": 4, "link": "https://maps.google.com/?q=24.632389,72.658861" },
    { "project": "Padiv", "x": 314, "y": 374, "status": "Under Development", "mwp": 2, "link": "https://maps.google.com/?q=24.932861,72.802167" }
  ];

  const handleProjectClick = (project: Project) => {
    window.open(project.link, '_blank');
  };

  return (
    <TooltipProvider>
      <div className="relative inline-block">
        <img 
          src="/lovable-uploads/60d4448c-03c8-4588-8a96-7fa828ab967d.png" 
          alt="India Map with Project Locations" 
          className="w-full h-auto max-w-4xl"
        />
        
        {projects.map((project, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <div
                className="absolute w-3 h-3 bg-red-500 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:bg-red-600 transition-colors"
                style={{
                  left: `${project.x}px`,
                  top: `${project.y}px`,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}
                onClick={() => handleProjectClick(project)}
                onMouseEnter={() => setHoveredProject(project.project)}
                onMouseLeave={() => setHoveredProject(null)}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-medium">{project.project}</p>
              <p>Status: {project.status}</p>
              <p>MWp: {project.mwp}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default ProjectMapInteractive;
