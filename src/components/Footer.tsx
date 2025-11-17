import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/used" className="hover:opacity-100">Used Inventory</Link></li>
              <li><Link to="/finance" className="hover:opacity-100">Get Financed</Link></li>
              <li><Link to="/trade-in" className="hover:opacity-100">Trade-In Value</Link></li>
              <li><Link to="/find-my-car" className="hover:opacity-100">Find My Car</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/ev-hybrid-guide-bc" className="hover:opacity-100">EV & Hybrid Guide</Link></li>
              <li><Link to="/service-specials" className="hover:opacity-100">Service Specials</Link></li>
              <li><a href="https://hyundai.ca" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">Official Hyundai Site</a></li>
              <li><a href="https://hyundai.ca/new-inventory" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">Browse New Inventory</a></li>
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
