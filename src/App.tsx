
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import AboutTeam from "./pages/AboutTeam";
import AboutParent from "./pages/AboutParent";
import RenewableSector from "./pages/RenewableSector";
import RenewablePolicies from "./pages/RenewablePolicies";
import RenewableCapacity from "./pages/RenewableCapacity";
import RenewableTargets from "./pages/RenewableTargets";
import RenewableProcess from "./pages/RenewableProcess";
import Businesses from "./pages/Businesses";
import BusinessKusum from "./pages/BusinessKusum";
import BusinessUtility from "./pages/BusinessUtility";
import BusinessCommercial from "./pages/BusinessCommercial";
import BusinessBess from "./pages/BusinessBess";
import BusinessEPC from "./pages/BusinessEPC";
import BusinessOM from "./pages/BusinessOM";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<AboutTeam />} />
          <Route path="/about/parent" element={<AboutParent />} />
          <Route path="/renewable-sector" element={<RenewableSector />} />
          <Route path="/renewable-sector/policies" element={<RenewablePolicies />} />
          <Route path="/renewable-sector/capacity" element={<RenewableCapacity />} />
          <Route path="/renewable-sector/targets" element={<RenewableTargets />} />
          <Route path="/renewable-sector/process" element={<RenewableProcess />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/businesses/kusum" element={<BusinessKusum />} />
          <Route path="/businesses/utility" element={<BusinessUtility />} />
          <Route path="/businesses/commercial" element={<BusinessCommercial />} />
          <Route path="/businesses/bess" element={<BusinessBess />} />
          <Route path="/businesses/epc" element={<BusinessEPC />} />
          <Route path="/businesses/om" element={<BusinessOM />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
