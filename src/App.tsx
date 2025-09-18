
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookCall from "./components/bookCall";



import ResumeReview from '@/pages/ResumeReview'
import ResumeRebuild from './pages/ResumeRebuild'
import CheatSheetPrep from './pages/CheatSheetPrep'
import PortfolioTemplates from './pages/PortfolioTemplates'
import MockInterview from '@/pages/MockInterview'



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/book-call" element={<BookCall />} />
          <Route path="/resume-review" element={<ResumeReview />} />
          <Route path="/resume-rebuild" element={<ResumeRebuild />} />
          <Route path="/portfolio-templates" element={<PortfolioTemplates />} />
          <Route path="/cheat-sheet-prep" element={<CheatSheetPrep />} />
          <Route path="/mock-interviews" element={<MockInterview />} />

      
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
