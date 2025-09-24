import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { testContentstackConnection } from "@/lib/contentstack";
import "@/lib/livePreview";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Awards from "./pages/Awards";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

// Configure React Query for CMS data - simple and reliable
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => {
  // Initialize Contentstack connection
  useEffect(() => {
    // Test Contentstack connection and see available content types
    testContentstackConnection();
    
    // Direct API test
    const testDirectAPI = async () => {
      try {
        console.log('🧪 Testing direct API call...');
        const response = await fetch(
          `https://cdn.contentstack.io/v3/content_types/feature_card/entries?environment=poc`,
          {
            headers: {
              'api_key': import.meta.env.VITE_CONTENTSTACK_API_KEY,
              'access_token': import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN,
            }
          }
        );
        const data = await response.json();
        console.log('🔥 DIRECT API RESPONSE:', data);
        
        // Also test hero_section_v2 specifically
        console.log('🧪 Testing hero_section_v2 API call...');
        const heroResponse = await fetch(
          `https://cdn.contentstack.io/v3/content_types/hero_section_v2/entries?environment=poc`,
          {
            headers: {
              'api_key': import.meta.env.VITE_CONTENTSTACK_API_KEY,
              'access_token': import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN,
            }
          }
        );
        const heroData = await heroResponse.json();
        console.log('🦸 HERO SECTION API RESPONSE:', heroData);
      } catch (error) {
        console.error('❌ Direct API failed:', error);
      }
    };
    
    testDirectAPI();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Static pages with CMS content integration */}
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            
            
            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
