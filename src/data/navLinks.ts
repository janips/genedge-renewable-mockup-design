import { NavLinkType } from '../types/navigation';

export const navLinks: NavLinkType[] = [
  { title: "Home", path: "/" },
  { 
    title: "About Us", 
    path: "/about",
    submenu: [
      { title: "Company", path: "/about" },
      { title: "Vision & Mission", path: "/about/vision-mission" },
      { title: "Who Are We", path: "/about/who-we-are" },
      { title: "What We Do", path: "/about/what-we-do" },
      { title: "Management Team", path: "/about/team" },
      { title: "Parent Company", path: "/about/parent" }
    ]
  },
  { 
    title: "Renewable Sector", 
    path: "/renewable-sector",
    submenu: [
      { title: "Key Policies & Regulations", path: "/renewable-sector/policies" },
      { title: "Capacity Addition", path: "/renewable-sector/capacity" },
      { title: "Targets by the Government", path: "/renewable-sector/targets" }
    ]
  },
  { 
    title: "Our Businesses", 
    path: "/businesses",
    submenu: [
      { title: "Introduction – Strategic Approach", path: "/businesses" },
      { title: "PM Kusum Projects", path: "/businesses/kusum" },
      { title: "Large Utility-Scale Projects", path: "/businesses/utility" },
      { title: "C&I Projects", path: "/businesses/commercial" },
      { title: "Battery Energy Storage Systems (BESS)", path: "/businesses/bess" },
      { title: "EPC Business", path: "/businesses/epc" },
      { title: "O&M Business", path: "/businesses/om" }
    ]
  },
  { 
    title: "Projects", 
    path: "/projects",
    submenu: [
      { title: "Existing Project Portfolio", path: "/projects" },
      { title: "Project Map", path: "/projects/map" }
    ]
  },
  { title: "Corporate Governance", path: "/corporate-governance" },
  { title: "Gallery", path: "/gallery" },
  { title: "Careers", path: "/careers" },
  { title: "Get in Touch", path: "/contact" }
];
