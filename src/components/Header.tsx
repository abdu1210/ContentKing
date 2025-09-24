import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Crown, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigation, useGlobalSettings } from "@/hooks/useContentstack";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: navigation, isLoading: navLoading } = useNavigation();
  const { data: globalSettings, isLoading: settingsLoading } = useGlobalSettings();

  // Loading state
  if (navLoading || settingsLoading) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center space-x-2">
            <Crown className="h-6 w-6 text-primary" />
            <span className="font-bold">Loading...</span>
          </div>
        </div>
      </header>
    );
  }

  // Fallback navigation if CMS data not available
  const defaultNavigation = {
    navigation_items: [
      { simple_link: { label: "Features", url: "/features", is_external: false } },
      { simple_link: { label: "Pricing", url: "/pricing", is_external: false } },
      {
        dropdown_menu: {
          label: "Company",
          dropdown_items: [
            { label: "About", url: "/about", description: "Learn about our mission" },
            { label: "Careers", url: "/careers", description: "Join our team" },
            { label: "Awards", url: "/awards", description: "Our achievements" }
          ]
        }
      },
      { simple_link: { label: "Contact", url: "/contact", is_external: false } }
    ],
    cta_buttons: {
      primary_cta: { text: "Start Free Trial", url: "/signup" },
      secondary_cta: { text: "Sign In", url: "/signin" }
    }
  };

  const navData = navigation?.[0] || defaultNavigation;
  const globalSettingsData = globalSettings?.[0];
  const siteTitle = globalSettingsData?.site_name || "Content King";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Crown className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">{siteTitle}</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navData.navigation_items?.map((item, index) => {
              if (item.simple_link) {
                return (
                  <Link
                    key={index}
                    to={item.simple_link.url}
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    {item.simple_link.label}
                  </Link>
                );
              }
              
              if (item.dropdown_menu) {
                return (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger className="flex items-center space-x-1 transition-colors hover:text-foreground/80 text-foreground/60">
                      <span>{item.dropdown_menu.label}</span>
                      <ChevronDown className="h-3 w-3" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {item.dropdown_menu.dropdown_items.map((dropdownItem, dropdownIndex) => (
                        <DropdownMenuItem key={dropdownIndex} asChild>
                          <Link 
                            to={dropdownItem.url}
                            className="flex flex-col items-start"
                          >
                            <span className="font-medium">{dropdownItem.label}</span>
                            {dropdownItem.description && (
                              <span className="text-xs text-muted-foreground">{dropdownItem.description}</span>
                            )}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              
              return null;
            })}
          </nav>
        </div>
        
        {/* Mobile menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <Crown className="h-6 w-6 text-primary" />
              <span className="font-bold">{siteTitle}</span>
            </Link>
            <nav className="flex flex-col space-y-3 mt-6">
              {navData.navigation_items?.map((item, index) => {
                if (item.simple_link) {
                  return (
                    <Link
                      key={index}
                      to={item.simple_link.url}
                      className="transition-colors hover:text-foreground/80 text-foreground/60"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.simple_link.label}
                    </Link>
                  );
                }
                
                if (item.dropdown_menu) {
                  return (
                    <div key={index} className="space-y-2">
                      <span className="font-medium text-foreground">{item.dropdown_menu.label}</span>
                      <div className="ml-4 space-y-2">
                        {item.dropdown_menu.dropdown_items.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.url}
                            className="block text-sm transition-colors hover:text-foreground/80 text-foreground/60"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                
                return null;
              })}
            </nav>
          </SheetContent>
        </Sheet>
        
        {/* Logo for mobile */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link to="/" className="flex items-center space-x-2 md:hidden">
              <Crown className="h-6 w-6 text-primary" />
              <span className="font-bold">{siteTitle}</span>
            </Link>
          </div>
          
          {/* CTA buttons */}
          <nav className="flex items-center space-x-2">
            {navData.cta_buttons?.secondary_cta?.text && (
              <Button variant="ghost" size="sm" asChild>
                <Link to={navData.cta_buttons.secondary_cta.url || "/signin"}>
                  {navData.cta_buttons.secondary_cta.text}
                </Link>
              </Button>
            )}
            {navData.cta_buttons?.primary_cta?.text && (
              <Button size="sm" asChild>
                <Link to={navData.cta_buttons.primary_cta.url || "/signup"}>
                  {navData.cta_buttons.primary_cta.text}
                </Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
