import { Helmet } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ComparisonProvider } from "@/contexts/ComparisonContext";
import { SavedVehiclesProvider } from "@/contexts/SavedVehiclesContext";
import Index from "./pages/Index";
import UsedInventory from "./pages/UsedInventory";
import VehicleDetail from "./pages/VehicleDetail";
import AdminInventory from "./pages/AdminInventory";
import Finance from "./pages/Finance";
import TradeIn from "./pages/TradeIn";
import EVGuide from "./pages/EVGuide";
import ServiceSpecials from "./pages/ServiceSpecials";
import FindMyCar from "./pages/FindMyCar";
import SavedVehicles from "./pages/SavedVehicles";
import CompareVehicles from "./pages/CompareVehicles";
import SecondChanceFinancing from "./pages/SecondChanceFinancing";
import SignAndDrive from "./pages/SignAndDrive";
import CreditRebuilding from "./pages/CreditRebuilding";
import Leasing from "./pages/Leasing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import WarrantiesProtection from "./pages/WarrantiesProtection";
import ElantraGuide from "./pages/guides/ElantraGuide";
import KonaGuide from "./pages/guides/KonaGuide";
import TucsonGuide from "./pages/guides/TucsonGuide";
import Ioniq5Guide from "./pages/guides/Ioniq5Guide";
import NotFound from "./pages/NotFound";
import ExitIntentPopup from "./components/ExitIntentPopup";
import StickyCTABar from "./components/StickyCTABar";
import ChatWidget from "./components/ChatWidget";
import NewVsUsed from "./pages/research/NewVsUsed";
import FinanceVsLease from "./pages/research/FinanceVsLease";
import BCLuxuryTax from "./pages/research/BCLuxuryTax";
import StudentPrograms from "./pages/research/StudentPrograms";
import NewToCanada from "./pages/research/NewToCanada";
import BCRegistrationInsurance from "./pages/research/BCRegistrationInsurance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SavedVehiclesProvider>
      <ComparisonProvider>
        <TooltipProvider>
          <Helmet>
            <meta name="robots" content="noindex, nofollow" />
            <meta name="googlebot" content="noindex, nofollow" />
            <meta name="bingbot" content="noindex, nofollow" />
          </Helmet>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/used" element={<UsedInventory />} />
              <Route path="/vehicle/:slug" element={<VehicleDetail />} />
              <Route path="/admin/inventory" element={<AdminInventory />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/second-chance-financing" element={<SecondChanceFinancing />} />
              <Route path="/sign-and-drive" element={<SignAndDrive />} />
              <Route path="/credit-rebuilding" element={<CreditRebuilding />} />
              <Route path="/leasing" element={<Leasing />} />
              <Route path="/trade-in" element={<TradeIn />} />
              <Route path="/ev-hybrid-guide-bc" element={<EVGuide />} />
              <Route path="/service-specials" element={<ServiceSpecials />} />
              <Route path="/find-my-car" element={<FindMyCar />} />
              <Route path="/saved-vehicles" element={<SavedVehicles />} />
              <Route path="/compare" element={<CompareVehicles />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/warranties" element={<WarrantiesProtection />} />
              <Route path="/hyundai-elantra-vancouver-guide" element={<ElantraGuide />} />
              <Route path="/hyundai-kona-vancouver-guide" element={<KonaGuide />} />
              <Route path="/hyundai-tucson-vancouver-guide" element={<TucsonGuide />} />
              <Route path="/hyundai-ioniq5-vancouver-guide" element={<Ioniq5Guide />} />
              {/* Research Pages */}
              <Route path="/research/new-vs-used" element={<NewVsUsed />} />
              <Route path="/research/finance-vs-lease" element={<FinanceVsLease />} />
              <Route path="/research/bc-luxury-tax" element={<BCLuxuryTax />} />
              <Route path="/research/student-programs" element={<StudentPrograms />} />
              <Route path="/research/new-to-canada" element={<NewToCanada />} />
              <Route path="/research/bc-registration-insurance" element={<BCRegistrationInsurance />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* Global Conversion Components */}
            <ExitIntentPopup />
            <StickyCTABar />
            <ChatWidget />
          </BrowserRouter>
        </TooltipProvider>
      </ComparisonProvider>
    </SavedVehiclesProvider>
  </QueryClientProvider>
);

export default App;
