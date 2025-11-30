import { useEffect } from "react";
import { Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { useFooter, useGlobalSettings } from "@/hooks/useContentstack";
import { Skeleton } from "@/components/ui/skeleton";
import { onEntryChange } from "@/lib/livePreview";

const FOOTER_TYPE = 'footer';
const SETTINGS_TYPE = 'global_settings';
const LOCALE = 'en-us';

const Footer = () => {
  const { data: footerContent, isLoading: footerLoading, refetch: refetchFooter } = useFooter();
  const { data: globalSettings, isLoading: settingsLoading, refetch: refetchGlobalSettings } = useGlobalSettings();

  useEffect(() => {
    onEntryChange(() => {
      refetchFooter();
      refetchGlobalSettings();
    });
  }, [refetchFooter, refetchGlobalSettings]);

  const footerCslp = (field: string) => 
    footerContent?.[0]?.uid ? `${FOOTER_TYPE}.${footerContent[0].uid}.${LOCALE}.${field}` : undefined;
  
  const settingsCslp = (field: string) => 
    globalSettings?.[0]?.uid ? `${SETTINGS_TYPE}.${globalSettings[0].uid}.${LOCALE}.${field}` : undefined;

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
        </div>
      </footer>
    );
  }

  const defaultFooterContent = {
    footer_sections: {
      company_section: { title: "Company", links: [{ label: "About", url: "/about" }, { label: "Careers", url: "/careers" }] },
      products_section: { title: "Products", links: [{ label: "Features", url: "/features" }] },
      resources_section: { title: "Resources", links: [{ label: "Contact", url: "/contact" }] }
    },
    footer_bottom: {
      copyright_text: "© 2024 Content King. All rights reserved.",
      legal_links: [{ label: "Privacy", url: "/privacy" }]
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
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Crown className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg" data-cslp={settingsCslp('site_title')}>{siteTitle}</span>
            </Link>
            <p className="text-muted-foreground mb-4" data-cslp={settingsCslp('site_tagline')}>{siteTagline}</p>
            {globalSettingsData?.contact_email && (
              <p className="text-sm text-muted-foreground">
                Contact us at{" "}
                <a href={`mailto:${globalSettingsData.contact_email}`} className="text-primary hover:underline" data-cslp={settingsCslp('contact_email')}>
                  {globalSettingsData.contact_email}
                </a>
              </p>
            )}
          </div>

          <div>
            <h3 className="font-semibold mb-4">{footerData.footer_sections?.company_section?.title}</h3>
            <ul className="space-y-2">
              {footerData.footer_sections?.company_section?.links?.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="text-muted-foreground hover:text-foreground transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{footerData.footer_sections?.products_section?.title}</h3>
            <ul className="space-y-2">
              {footerData.footer_sections?.products_section?.links?.map((link, index) => (
                <li key={index}>
                  {link.url?.startsWith('http') ? (
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
                  ) : (
                    <Link to={link.url} className="text-muted-foreground hover:text-foreground transition-colors">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{footerData.footer_sections?.resources_section?.title}</h3>
            <ul className="space-y-2">
              {footerData.footer_sections?.resources_section?.links?.map((link, index) => (
                <li key={index}>
                  {link.url?.startsWith('http') ? (
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
                  ) : (
                    <Link to={link.url} className="text-muted-foreground hover:text-foreground transition-colors">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm" data-cslp={footerCslp('footer_bottom.copyright_text')}>
            {footerData.footer_bottom?.copyright_text}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerData.footer_bottom?.legal_links?.map((link, index) => (
              <Link key={index} to={link.url} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
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
