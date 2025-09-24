import React from "react";
import { Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { useFooter, useGlobalSettings } from "@/hooks/useContentstack";
import { onEntryChange } from "@/lib/livePreview";
import { Skeleton } from "@/components/ui/skeleton";

const Footer = () => {
  const { data: footerContent, isLoading: footerLoading, refetch: refetchFooter } = useFooter();
  const { data: globalSettings, isLoading: settingsLoading, refetch: refetchSettings } = useGlobalSettings();

  // CSR Live Preview: Listen for entry changes and refetch data
  React.useEffect(() => {
    onEntryChange(() => {
      console.log('🔄 Footer: Entry changed, refetching data...');
      refetchFooter();
      refetchSettings();
    });
  }, [refetchFooter, refetchSettings]);

  // Loading state
  if (footerLoading || settingsLoading) {
    return (
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="h-6 w-6 text-primary" />
                <Skeleton className="h-6 w-32" />
              </div>
              <Skeleton className="h-16 w-full" />
            </div>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>
                <Skeleton className="h-6 w-24 mb-4" />
                {Array.from({ length: 4 }).map((_, linkIndex) => (
                  <Skeleton key={linkIndex} className="h-4 w-20 mb-2" />
                ))}
              </div>
            ))}
          </div>
          <hr className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Skeleton className="h-4 w-48" />
            <div className="flex space-x-4 mt-4 md:mt-0">
              {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="h-4 w-16" />
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Fallback footer content if CMS data not available
  const defaultFooterContent = {
    footer_sections: {
      company_section: {
        title: "Company",
        links: [
          { label: "About", url: "/about" },
          { label: "Careers", url: "/careers" },
          { label: "Awards", url: "/awards" },
          { label: "Contact", url: "/contact" }
        ]
      },
      products_section: {
        title: "Products",
        links: [
          { label: "Content Management", url: "/features" },
          { label: "APIs & SDKs", url: "/features" },
          { label: "Analytics", url: "/features" },
          { label: "Security", url: "/features" }
        ]
      },
      resources_section: {
        title: "Resources",
        links: [
          { label: "Documentation", url: "https://docs.contentstack.com" },
          { label: "Support", url: "/contact" },
          { label: "Community", url: "https://community.contentstack.com" },
          { label: "Blog", url: "https://blog.contentstack.com" }
        ]
      }
    },
    footer_bottom: {
      copyright_text: "© 2024 Content King. All rights reserved.",
      legal_links: [
        { label: "Privacy Policy", url: "/privacy" },
        { label: "Terms of Service", url: "/terms" },
        { label: "Cookie Policy", url: "/cookies" }
      ]
    }
  };

  const footerData = footerContent?.[0] || defaultFooterContent;
  const globalSettingsData = globalSettings?.[0];
  const siteTitle = globalSettingsData?.site_title || "Content King";
  const siteTagline = globalSettingsData?.site_tagline || "The future of content management";

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Crown className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">{siteTitle}</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              {siteTagline}
            </p>
            {globalSettingsData?.contact_email && (
              <p className="text-sm text-muted-foreground">
                Contact us at{" "}
                <a 
                  href={`mailto:${globalSettingsData.contact_email}`}
                  className="text-primary hover:underline"
                >
                  {globalSettingsData.contact_email}
                </a>
              </p>
            )}
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">{footerData.footer_sections.company_section.title}</h3>
            <ul className="space-y-2">
              {footerData.footer_sections.company_section.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-semibold mb-4">{footerData.footer_sections.products_section.title}</h3>
            <ul className="space-y-2">
              {footerData.footer_sections.products_section.links.map((link, index) => (
                <li key={index}>
                  {link.url.startsWith('http') ? (
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.url} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4">{footerData.footer_sections.resources_section.title}</h3>
            <ul className="space-y-2">
              {footerData.footer_sections.resources_section.links.map((link, index) => (
                <li key={index}>
                  {link.url.startsWith('http') ? (
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.url} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            {footerData.footer_bottom.copyright_text}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerData.footer_bottom.legal_links.map((link, index) => (
              <Link 
                key={index}
                to={link.url} 
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
