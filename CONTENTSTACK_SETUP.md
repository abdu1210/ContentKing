# Contentstack CMS Integration Setup Guide

This guide will help you set up Contentstack CMS for your fully dynamic React application.

## 1. Environment Setup

### Create Environment File
Create a `.env` file in your project root with your Contentstack credentials:

```env
VITE_CONTENTSTACK_API_KEY=your_api_key_here
VITE_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token_here
VITE_CONTENTSTACK_ENVIRONMENT=your_environment_name
VITE_CONTENTSTACK_REGION=us
```

**Available regions:** `us`, `eu`, `azure_na`, `azure_eu`, `gcp_na`

### Install Dependencies
```bash
npm install @contentstack/delivery-sdk
```

## 2. Contentstack Content Models Setup

You need to create the following content types in your Contentstack dashboard:

### 2.1 Global Settings (`global_settings`)
- **site_title** (Single Line Textbox) - Site name
- **site_logo** (File) - Site logo image
- **site_favicon** (File) - Site favicon
- **default_seo** (Reference: SEO Metadata) - Default SEO settings

### 2.2 Navigation (`navigation`)
- **navigation_items** (Group) - Multiple
  - **label** (Single Line Textbox) - Navigation label
  - **url** (Single Line Textbox) - Navigation URL
  - **is_external** (Boolean) - External link flag
  - **children** (Group) - Multiple (for dropdowns)
    - **label** (Single Line Textbox)
    - **url** (Single Line Textbox)
    - **is_external** (Boolean)

### 2.3 Hero Section (`hero_section`)
- **headline** (Single Line Textbox) - Main headline
- **subheadline** (Single Line Textbox) - Optional subheadline
- **description** (Multi Line Textbox) - Hero description
- **page_slug** (Single Line Textbox) - Associated page slug
- **cta_primary** (Group)
  - **text** (Single Line Textbox)
  - **url** (Single Line Textbox)
  - **is_external** (Boolean)
- **cta_secondary** (Group)
  - **text** (Single Line Textbox)
  - **url** (Single Line Textbox)
  - **is_external** (Boolean)
- **hero_image** (File) - Hero image
- **background_video** (File) - Optional background video

### 2.4 Feature (`feature`)
- **icon** (Single Line Textbox) - Lucide icon name (e.g., "Zap", "Shield")
- **feature_title** (Single Line Textbox) - Feature title
- **description** (Multi Line Textbox) - Feature description
- **image** (File) - Optional feature image
- **link** (Group) - Optional feature link
  - **text** (Single Line Textbox)
  - **url** (Single Line Textbox)

### 2.5 Stats (`stats`)
- **section_title** (Single Line Textbox) - Optional section title
- **stats_items** (Group) - Multiple
  - **label** (Single Line Textbox) - Stat label
  - **value** (Number) - Stat value
  - **suffix** (Single Line Textbox) - Optional suffix (e.g., "%", "+")
  - **prefix** (Single Line Textbox) - Optional prefix (e.g., "$")

### 2.6 Page (`page`)
- **slug** (Single Line Textbox) - URL slug
- **page_title** (Single Line Textbox) - Page title
- **sections** (Group) - Multiple
  - **section_type** (Single Line Textbox) - Section type identifier
  - **section_data** (JSON Object) - Section-specific data
- **seo_metadata** (Reference: SEO Metadata)
- **show_in_navigation** (Boolean)
- **navigation_label** (Single Line Textbox)

### 2.7 Footer (`footer`)
- **footer_sections** (Group) - Multiple
  - **section_title** (Single Line Textbox)
  - **links** (Group) - Multiple
    - **text** (Single Line Textbox)
    - **url** (Single Line Textbox)
    - **is_external** (Boolean)
- **copyright_text** (Single Line Textbox)
- **social_links** (Group) - Multiple
  - **platform** (Single Line Textbox) - e.g., "twitter", "linkedin"
  - **url** (Single Line Textbox)

### 2.8 SEO Metadata (`seo_metadata`)
- **page_slug** (Single Line Textbox) - Associated page slug
- **meta_title** (Single Line Textbox)
- **meta_description** (Multi Line Textbox)
- **meta_keywords** (Single Line Textbox)
- **og_title** (Single Line Textbox)
- **og_description** (Multi Line Textbox)
- **og_image** (File)
- **canonical_url** (Single Line Textbox)

### 2.9 Pricing Plan (`pricing_plan`)
- **plan_name** (Single Line Textbox)
- **price** (Number)
- **currency** (Single Line Textbox) - e.g., "USD"
- **billing_period** (Single Line Textbox) - "monthly", "yearly", "one-time"
- **description** (Multi Line Textbox)
- **features** (Group) - Multiple
  - **feature** (Single Line Textbox)
  - **included** (Boolean)
  - **description** (Single Line Textbox) - Optional
- **is_popular** (Boolean)
- **cta_text** (Single Line Textbox)
- **cta_url** (Single Line Textbox)

### 2.10 Team Member (`team_member`)
- **name** (Single Line Textbox)
- **position** (Single Line Textbox)
- **bio** (Multi Line Textbox)
- **photo** (File)
- **email** (Single Line Textbox)
- **social_links** (Group) - Multiple
  - **platform** (Single Line Textbox)
  - **url** (Single Line Textbox)

### 2.11 Contact Info (`contact_info`)
- **company_name** (Single Line Textbox)
- **address** (Multi Line Textbox)
- **phone** (Single Line Textbox)
- **email** (Single Line Textbox)
- **office_hours** (Single Line Textbox)
- **contact_form_enabled** (Boolean)
- **social_links** (Group) - Multiple
  - **platform** (Single Line Textbox)
  - **url** (Single Line Textbox)

## 3. Sample Content Creation

### 3.1 Create Global Settings
1. Go to Contentstack → Entries → Global Settings
2. Create a new entry with:
   - **site_title**: "Your Site Name"
   - **site_logo**: Upload your logo
   - **site_favicon**: Upload favicon

### 3.2 Create Navigation
1. Go to Entries → Navigation
2. Create navigation items:
   ```
   - Features (/features)
   - Pricing (/pricing)
   - Contact (/contact)
   - About (/about) [Company dropdown]
   - Careers (/careers) [Company dropdown]
   - Awards (/awards) [Company dropdown]
   ```

### 3.3 Create Hero Section
1. Go to Entries → Hero Section
2. Create hero for home page:
   - **page_slug**: "home"
   - **headline**: "Build Digital Experiences That Scale Infinitely"
   - **description**: "Your hero description"
   - **cta_primary**: { text: "Start Free Trial", url: "/signup" }
   - **hero_image**: Upload hero image

### 3.4 Create Features
Create 6 feature entries with:
- **icon**: Lucide icon names (Zap, Shield, Globe, Code, Users, BarChart3)
- **feature_title**: Feature titles
- **description**: Feature descriptions

### 3.5 Create Stats
Create a stats entry with 3 stat items:
- Uptime: 99.9%
- API Calls/Month: 10M+
- Companies: 500+

## 4. Dynamic Routing Setup

The app supports dynamic routing based on page slugs. Pages are automatically loaded from Contentstack based on the URL slug.

### Page Structure
- Home page: slug = "home"
- About page: slug = "about"
- Features page: slug = "features"
- etc.

## 5. Development

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## 6. Features Included

✅ **Fully Dynamic Content** - All content managed through Contentstack
✅ **Dynamic Navigation** - Navigation items from CMS
✅ **Dynamic Routing** - Page routing based on CMS slugs
✅ **SEO Management** - Dynamic meta tags and SEO data
✅ **Image Management** - All images served from Contentstack CDN
✅ **Component Library** - Full shadcn/ui component integration
✅ **Loading States** - Skeleton loading for better UX
✅ **Error Handling** - Graceful fallbacks for missing content
✅ **TypeScript Support** - Full type safety for CMS data
✅ **Responsive Design** - Mobile-first responsive components

## 7. Content Management

### Adding New Pages
1. Create a new Page entry in Contentstack
2. Set the slug (URL path)
3. Add sections and content
4. The page will be automatically available at `/your-slug`

### Updating Navigation
1. Edit the Navigation entry in Contentstack
2. Add/remove/reorder navigation items
3. Changes appear immediately on the site

### Managing Features
1. Add/edit Feature entries
2. Use Lucide icon names for icons
3. Features automatically appear on the features section

## 8. Troubleshooting

### Common Issues
1. **Missing environment variables**: Check your `.env` file
2. **Content not loading**: Verify Contentstack credentials
3. **Icons not showing**: Ensure Lucide icon names are correct
4. **Images not loading**: Check Contentstack asset URLs

### Debugging
- Enable console logging in development
- Check network requests in browser dev tools
- Verify content structure in Contentstack dashboard

## 9. Next Steps

After setup, you can:
- Customize component styling
- Add more content types
- Implement user authentication
- Add e-commerce features
- Set up webhooks for instant updates
- Configure multiple environments

## Support

For issues with this integration:
1. Check the console for error messages
2. Verify Contentstack content model structure
3. Ensure all required fields are populated
4. Check network connectivity to Contentstack

For Contentstack-specific issues, refer to [Contentstack Documentation](https://www.contentstack.com/docs/).
