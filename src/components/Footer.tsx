import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Footer = () => {
  const [shopOpen, setShopOpen] = useState(true);
  const [makeOpen, setMakeOpen] = useState(false);
  const [modelsOpen, setModelsOpen] = useState(false);

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
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Olympic Hyundai Vancouver</h3>
            <div className="space-y-2 text-sm opacity-90">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                123 Main Street, Vancouver, BC V6B 1A1
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                (604) 555-0100
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                info@olympichyundai.ca
              </p>
            </div>
          </div>

          <div>
            <Collapsible open={shopOpen} onOpenChange={setShopOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full mb-4 font-semibold hover:opacity-80 transition-opacity">
                <span>Shop</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${shopOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul className="space-y-2 text-sm opacity-90">
                  <li><Link to="/used" className="hover:opacity-100">Used Inventory</Link></li>
                  <li><Link to="/find-my-car" className="hover:opacity-100">Find My Car</Link></li>
                  <li><Link to="/trade-in" className="hover:opacity-100">Trade-In Value</Link></li>
                  <li><a href="https://www.olympichyundaivancouver.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">New Vehicles</a></li>
                  <li><Link to="/used?body=SUV" className="hover:opacity-100">Used SUVs</Link></li>
                  <li><Link to="/used?body=Sedan" className="hover:opacity-100">Used Sedans</Link></li>
                  <li><Link to="/used?body=Truck" className="hover:opacity-100">Used Trucks</Link></li>
                  <li><Link to="/used?price=under15k" className="hover:opacity-100">Under $15,000</Link></li>
                  <li><Link to="/used?price=under5k" className="hover:opacity-100">Under $5,000</Link></li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Financing</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/finance" className="hover:opacity-100">Get Pre-Approved</Link></li>
              <li><Link to="/leasing" className="hover:opacity-100">Leasing Options</Link></li>
              <li><Link to="/second-chance-financing" className="hover:opacity-100">Second Chance Financing</Link></li>
              <li><Link to="/sign-and-drive" className="hover:opacity-100">Sign and Drive</Link></li>
              <li><Link to="/credit-rebuilding" className="hover:opacity-100">Credit Rebuilding</Link></li>
            </ul>
          </div>

          <div>
            <Collapsible open={makeOpen} onOpenChange={setMakeOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full mb-4 font-semibold hover:opacity-80 transition-opacity">
                <span>Shop by Make</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${makeOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul className="space-y-2 text-sm opacity-90 columns-2 gap-x-4">
                  {makes.map((make) => (
                    <li key={make}>
                      <Link to={`/used?make=${make}`} className="hover:opacity-100">
                        Used {make} Vehicles
                      </Link>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div>
            <Collapsible open={modelsOpen} onOpenChange={setModelsOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full mb-4 font-semibold hover:opacity-80 transition-opacity">
                <span>Browse Popular Models</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${modelsOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul className="space-y-2 text-sm opacity-90">
                  {popularModels.map((item, index) => (
                    <li key={index}>
                      <Link 
                        to={`/used?make=${item.make}&model=${item.model}`} 
                        className="hover:opacity-100"
                      >
                        {item.make} {item.model}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Research</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/research/new-vs-used" className="hover:opacity-100">New vs. Used</Link></li>
              <li><Link to="/research/finance-vs-lease" className="hover:opacity-100">Finance vs. Lease</Link></li>
              <li><Link to="/ev-hybrid-guide-bc" className="hover:opacity-100">EV & Hybrid Guide</Link></li>
              <li><Link to="/research/bc-luxury-tax" className="hover:opacity-100">BC Luxury Tax</Link></li>
              <li><Link to="/research/student-programs" className="hover:opacity-100">Student Programs</Link></li>
              <li><Link to="/research/new-to-canada" className="hover:opacity-100">New to Canada</Link></li>
              <li><Link to="/research/bc-registration-insurance" className="hover:opacity-100">BC Registration & Insurance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs opacity-75">
              Hours: Mon-Fri 9am-7pm<br />
              Sat 9am-6pm, Sun 11am-5pm
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-xs opacity-75 text-center">
          <p className="mb-2">
            This site is an independent supplemental experience for Olympic Hyundai Vancouver. 
            Official Hyundai new inventory, service booking, and OEM incentives remain on the primary Hyundai website.
          </p>
          <p>© {new Date().getFullYear()} Olympic Hyundai Vancouver. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
