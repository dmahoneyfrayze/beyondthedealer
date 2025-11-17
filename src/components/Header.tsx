import { Link } from "react-router-dom";
import { Phone, Menu, ChevronDown, Heart, GitCompare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { useComparison } from "@/contexts/ComparisonContext";
import { useSavedVehicles } from "@/contexts/SavedVehiclesContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { comparisonVehicles } = useComparison();
  const { savedVehicles } = useSavedVehicles();

  const inventoryLinks = [
    { name: "All Used Inventory", href: "/used" },
    { name: "Under $5,000", href: "/used?price=under5k" },
    { name: "Under $15,000", href: "/used?price=under15k" },
    { name: "Slightly Used (Low Miles)", href: "/used?condition=low-miles" },
    { name: "SUVs", href: "/used?body=SUV" },
    { name: "Sedans", href: "/used?body=Sedan" },
    { name: "Trucks", href: "/used?body=Truck" },
  ];

  const financeLinks = [
    { name: "Get Pre-Approved", href: "/finance" },
    { name: "Second Chance Financing", href: "/second-chance-financing" },
    { name: "Sign and Drive Program", href: "/sign-and-drive" },
    { name: "Credit Rebuilding", href: "/credit-rebuilding" },
    { name: "Leasing Options", href: "/leasing" },
  ];

  const navigation = [
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

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Inventory
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-background">
                    {inventoryLinks.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Finance
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-background">
                    {financeLinks.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link
                    to={item.href}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <a
                  href="https://www.olympichyundaivancouver.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  New Vehicles
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center space-x-4">
            {savedVehicles.length > 0 && (
              <Button asChild variant="outline" size="sm">
                <Link to="/saved-vehicles">
                  <Heart className="w-4 h-4 mr-2" />
                  Saved ({savedVehicles.length})
                </Link>
              </Button>
            )}
            {comparisonVehicles.length > 0 && (
              <Button asChild variant="outline" size="sm">
                <Link to="/compare">
                  <GitCompare className="w-4 h-4 mr-2" />
                  Compare ({comparisonVehicles.length})
                </Link>
              </Button>
            )}
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
              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Inventory</p>
                {inventoryLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-secondary rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
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

              <a
                href="https://www.olympichyundaivancouver.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                New Vehicles
              </a>
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
