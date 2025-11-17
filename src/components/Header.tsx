import { Link } from "react-router-dom";
import { Phone, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Used Inventory", href: "/used" },
    { name: "Finance", href: "/finance" },
    { name: "Trade-In", href: "/trade-in" },
    { name: "EV Guide", href: "/ev-hybrid-guide-bc" },
    { name: "Service", href: "/service-specials" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              Olympic Hyundai
            </div>
            <div className="text-sm text-muted-foreground hidden sm:block">Vancouver</div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:604-555-0100" className="flex items-center text-sm text-foreground hover:text-primary">
              <Phone className="w-4 h-4 mr-2" />
              (604) 555-0100
            </a>
            <Button asChild variant="cta" size="sm">
              <Link to="/find-my-car">Find My Car</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2">
                <a href="tel:604-555-0100" className="flex items-center text-sm text-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  (604) 555-0100
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
