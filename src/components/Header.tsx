import { Link } from "react-router-dom";
import { Phone, Menu, ChevronDown, Heart, GitCompare, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";
import { useComparison } from "@/contexts/ComparisonContext";
import { useSavedVehicles } from "@/contexts/SavedVehiclesContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { comparisonVehicles } = useComparison();
  const { savedVehicles } = useSavedVehicles();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const inventoryLinks = [
    { name: "All Used Inventory", href: "/used" },
    { name: "Under $5,000", href: "/used?price=under5k" },
    { name: "Under $15,000", href: "/used?price=under15k" },
    { name: "Slightly Used (Low Miles)", href: "/used?condition=low-miles" },
    { name: "SUVs", href: "/used?body=SUV" },
    { name: "Sedans", href: "/used?body=Sedan" },
    { name: "Trucks", href: "/used?body=Truck" },
  ];

  const researchLinks = [
    { name: "New vs. Used", href: "/research/new-vs-used" },
    { name: "Finance vs. Lease", href: "/research/finance-vs-lease" },
    { name: "BC Luxury Tax Guide", href: "/research/bc-luxury-tax" },
    { name: "Student Programs", href: "/research/student-programs" },
    { name: "New to Canada Programs", href: "/research/new-to-canada" },
    { name: "BC Registration & Insurance", href: "/research/bc-registration-insurance" },
    { name: "EV & Hybrid Guide", href: "/ev-hybrid-guide-bc" },
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
    { name: "Warranties", href: "/warranties" },
    { name: "Service", href: "/service-specials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-black/95 backdrop-blur-md shadow-md py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-white text-black p-1.5 rounded-sm group-hover:bg-accent transition-colors duration-300">
              <Car className="w-6 h-6" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? "text-white" : "text-white"}`}>
              Beyond the Dealership
            </span>
            <div className="text-sm text-muted-foreground hidden sm:block">Nationwide Delivery</div>
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
                          {item.external ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.name}</div>
                            </a>
                          ) : (
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.name}</div>
                            </Link>
                          )}
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

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Research
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-background">
                    {researchLinks.map((item) => (
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
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent ${isScrolled ? "text-white/90" : "text-white/90"
                      }`}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}
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
            <a href="tel:204-297-6177" className="flex items-center text-sm text-foreground hover:text-primary">
              <Phone className="w-4 h-4 mr-2" />
              (204) 297-6177
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

              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Finance</p>
                {financeLinks.map((item) => (
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

              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Research</p>
                {researchLinks.map((item) => (
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
              <div className="px-4 py-2">
                <a href="tel:604-555-0100" className="flex items-center text-sm text-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  (204) 297-6177
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
