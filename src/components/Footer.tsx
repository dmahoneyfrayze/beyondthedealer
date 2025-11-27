import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Footer = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const makes = [
    "Hyundai", "Honda", "Toyota", "Ford", "Mazda", "Nissan", "Subaru",
    "Acura", "Jeep", "Dodge", "Chevrolet", "GMC", "BMW", "Mercedes-Benz",
    "Audi", "Volkswagen", "Kia", "Mitsubishi", "Volvo", "Lexus"
  ];

  const popularModels = [
    { make: "Honda", model: "Civic" },
    { make: "Toyota", model: "Corolla" },
    { make: "Hyundai", model: "Elantra" },
    { make: "Toyota", model: "RAV4" },
    { make: "Nissan", model: "Rogue" },
    { make: "Honda", model: "CR-V" },
    { make: "Tesla", model: "Model 3" },
    { make: "Mazda", model: "CX-5" },
    { make: "Kia", model: "Forte" },
    { make: "Toyota", model: "Camry" },
    { make: "Mazda", model: "Mazda3" },
    { make: "Jeep", model: "Wrangler" },
    { make: "Ford", model: "F-150" },
    { make: "Ram", model: "1500" },
  ];

  const locations = [
    "Winnipeg", "Brandon", "Steinbach", "Portage la Prairie", "Thompson",
    "Kenora", "Thunder Bay", "Dryden", "Fort Frances", "Sioux Lookout"
  ];

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white/10 p-1.5 rounded-sm backdrop-blur-sm">
                <img src="/btd-logo.png" alt="BTD Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight font-serif">Beyond the Dealership</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A new standard in automotive retail. Premium inventory, transparent financing, and a seamless digital experience.
            </p>
            <div className="space-y-3">
              <a href="tel:2042976177" className="flex items-center text-sm text-gray-300 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 mr-3 text-accent" />
                (204) 297-6177
              </a>
              <a href="mailto:Beyondthedealership@icloud.com" className="flex items-center text-sm text-gray-300 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 mr-3 text-accent" />
                Beyondthedealership@icloud.com
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Inventory</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/used" className="hover:text-accent transition-colors flex items-center gap-2 group">All Vehicles <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/used?body=SUV" className="hover:text-accent transition-colors">SUVs & Crossovers</Link></li>
              <li><Link to="/used?body=Truck" className="hover:text-accent transition-colors">Trucks</Link></li>
              <li><Link to="/used?body=Sedan" className="hover:text-accent transition-colors">Sedans</Link></li>
              <li><Link to="/find-my-car" className="hover:text-accent transition-colors text-accent">Concierge Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Financing</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/finance" className="hover:text-accent transition-colors">Get Pre-Approved</Link></li>
              <li><Link to="/trade-in" className="hover:text-accent transition-colors">Value Your Trade</Link></li>
              <li><Link to="/credit-rebuilding" className="hover:text-accent transition-colors">Credit Rebuilding</Link></li>
              <li><Link to="/finance" className="hover:text-accent transition-colors">Payment Calculator</Link></li>
            </ul>
          </div>

          {/* Partners Column */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Strategic Partners</h4>
            <div className="space-y-4">
              <div className="group">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Powered By</p>
                <p className="font-serif text-lg text-gray-300 group-hover:text-white transition-colors">Maserati of Winnipeg</p>
              </div>
              <div className="group">
                <p className="font-serif text-lg text-gray-300 group-hover:text-white transition-colors">Alfa Romeo of Winnipeg</p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Network Partners</p>
                <p className="text-sm text-gray-400">Kenora Chrysler Dodge Jeep Ram</p>
                <p className="text-sm text-gray-400 mt-1">Kenora GM</p>
                <p className="text-sm text-gray-400 mt-1">Kenora Honda</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Links Section - Collapsible */}
        <div className="border-t border-white/10 py-12 grid md:grid-cols-3 gap-8">
          {/* Popular Makes */}
          <Collapsible open={openSections['makes']} onOpenChange={() => toggleSection('makes')} className="w-full">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-bold text-white">Popular Makes</h5>
              <CollapsibleTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent text-gray-400">
                  <ChevronDown className={`w-4 h-4 transition-transform ${openSections['makes'] ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="data-[state=closed]:hidden md:data-[state=closed]:block">
              <ul className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                {makes.map((make) => (
                  <li key={make}>
                    <Link to={`/used?make=${make}`} className="hover:text-accent transition-colors">
                      Used {make}
                    </Link>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>

          {/* Popular Models */}
          <Collapsible open={openSections['models']} onOpenChange={() => toggleSection('models')} className="w-full">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-bold text-white">Popular Models</h5>
              <CollapsibleTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent text-gray-400">
                  <ChevronDown className={`w-4 h-4 transition-transform ${openSections['models'] ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="data-[state=closed]:hidden md:data-[state=closed]:block">
              <ul className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                {popularModels.map((item, index) => (
                  <li key={index}>
                    <Link to={`/used?make=${item.make}&model=${item.model}`} className="hover:text-accent transition-colors">
                      Used {item.make} {item.model}
                    </Link>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>

          {/* Locations */}
          <Collapsible open={openSections['locations']} onOpenChange={() => toggleSection('locations')} className="w-full">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-bold text-white">Serving Locations</h5>
              <CollapsibleTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent text-gray-400">
                  <ChevronDown className={`w-4 h-4 transition-transform ${openSections['locations'] ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="data-[state=closed]:hidden md:data-[state=closed]:block">
              <ul className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                {locations.map((loc) => (
                  <li key={loc}>
                    <Link to="/used" className="hover:text-accent transition-colors flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {loc}
                    </Link>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Beyond the Dealership. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <div className="flex gap-4 ml-4 border-l border-white/10 pl-4">
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
