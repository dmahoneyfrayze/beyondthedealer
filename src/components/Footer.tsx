import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ChevronDown, Car } from "lucide-react";
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
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white text-black p-1.5 rounded-sm">
                <Car className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">Beyond the Dealership</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Redefining the pre-owned vehicle experience. Premium inventory, nationwide delivery, and exclusive partnerships.
            </p>
            <p className="flex items-center">
              <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
              (204) 297-6177
            </p>
            <p className="flex items-center">
              <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
              Beyondthedealership@icloud.com
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
                <li><Link to="/find-my-car" className="hover:opacity-100">Concierge Service</Link></li>
                <li><Link to="/trade-in" className="hover:opacity-100">Trade-In Value</Link></li>
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

        <div>
          <h3 className="text-lg font-semibold mb-4">Strategic Partners</h3>
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Powered By</p>
              <div className="flex flex-col gap-2">
                <span className="font-serif text-xl tracking-wide">MASERATI</span>
                <span className="text-xs text-muted-foreground">OF WINNIPEG</span>
              </div>
              <div className="my-2 border-t border-white/10"></div>
              <div className="flex flex-col gap-2">
                <span className="font-serif text-xl tracking-wide">ALFA ROMEO</span>
                <span className="text-xs text-muted-foreground">OF WINNIPEG</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800 pt-8 text-xs text-neutral-500 text-center">
        <p className="mb-4 max-w-4xl mx-auto leading-relaxed">
          Beyond the Dealership is a stand-alone supplemental experience designed to provide a premium, seamless vehicle acquisition process.
          We work in partnership with Maserati of Winnipeg and Alfa Romeo of Winnipeg to offer an exclusive selection of high-end pre-owned inventory.
          Instant approvals available for clients in Manitoba and Ontario.
        </p>
        <p>© {new Date().getFullYear()} Beyond the Dealership. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
