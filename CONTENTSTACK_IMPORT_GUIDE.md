# Contentstack Content Types Import Guide

## 📦 Ready-to-Import JSON Schemas

I've created Contentstack-compatible JSON schemas for all content types. You can import these directly into your Contentstack UI!

## 🚀 Quick Import Steps

### 1. **Access Your Contentstack Dashboard**
- Log into your Contentstack account
- Go to your stack
- Navigate to **Content Models**

### 2. **Import Content Types (One by one)**

For each content type, follow these steps:

1. Click **"+ Add Content Type"**
2. Click **"Import"** (instead of creating from scratch)
3. Copy the JSON from the corresponding file
4. Paste it into the import dialog
5. Click **"Import"**

## 📋 Import Order (Recommended)

### **Essential Content Types (Start with these):**

#### 1. **Global Settings** ⚙️
**File:** `contentstack-schemas/global_settings.json`
**Purpose:** Site branding, logo, title
**Type:** Singleton (only one entry allowed)

#### 2. **Navigation** 🧭
**File:** `contentstack-schemas/navigation.json`
**Purpose:** Dynamic navigation menu
**Type:** Singleton (only one entry allowed)

#### 3. **Hero Section** 🎯
**File:** `contentstack-schemas/hero_section.json`
**Purpose:** Hero content for different pages
**Type:** Multiple entries (one per page)

#### 4. **Feature** ⭐
**File:** `contentstack-schemas/feature.json`
**Purpose:** Individual feature items
**Type:** Multiple entries (one per feature)

#### 5. **Stats** 📊
**File:** `contentstack-schemas/stats.json`
**Purpose:** Statistics/counters section
**Type:** Singleton (only one entry allowed)

### **Additional Content Types (Optional for now):**

#### 6. **Footer** 🦶
**File:** `contentstack-schemas/footer.json`
**Purpose:** Footer sections and links
**Type:** Singleton

#### 7. **Page** 📄
**File:** `contentstack-schemas/page.json`
**Purpose:** Dynamic pages with flexible sections
**Type:** Multiple entries

#### 8. **SEO Metadata** 🔍
**File:** `contentstack-schemas/seo_metadata.json`
**Purpose:** SEO meta tags and Open Graph data
**Type:** Multiple entries

## 🎯 Priority Setup (Start Here)

**For immediate results, import these 5 content types first:**
1. ✅ Global Settings
2. ✅ Navigation  
3. ✅ Hero Section
4. ✅ Feature
5. ✅ Stats

**This will give you a fully functional dynamic homepage!**

## 📝 Sample Content Creation

After importing content types, create sample entries:

### **1. Global Settings Entry**
- **Title:** "Site Settings"
- **Site Title:** "Your Company Name"
- **Site Logo:** Upload your logo
- **Site Favicon:** Upload favicon

### **2. Navigation Entry**
- **Title:** "Main Navigation"
- **Navigation Items:**
  ```
  Features (/features)
  Pricing (/pricing)
  Contact (/contact)
  About (/about) [for Company dropdown]
  Careers (/careers) [for Company dropdown]
  Awards (/awards) [for Company dropdown]
  ```

### **3. Hero Section Entry**
- **Title:** "Home Hero"
- **Page Slug:** "home"
- **Headline:** "Build Digital Experiences That Scale Infinitely"
- **Description:** "The headless CMS that empowers teams to create, manage, and deliver content across any platform with unmatched speed and flexibility."
- **Primary CTA:** Text: "Start Free Trial", URL: "/signup"
- **Secondary CTA:** Text: "Watch Demo", URL: "#"
- **Hero Image:** Upload a hero image

### **4. Feature Entries** (Create 6 separate entries)

**Feature 1:**
- **Title:** "Lightning Fast Feature"
- **Icon:** "Zap"
- **Feature Title:** "Lightning Fast"
- **Description:** "Deliver content at blazing speeds with our global CDN and optimized API endpoints."

**Feature 2:**
- **Title:** "Enterprise Security Feature"
- **Icon:** "Shield"
- **Feature Title:** "Enterprise Security"
- **Description:** "Bank-level security with SOC 2 compliance, encryption at rest, and advanced access controls."

**Feature 3:**
- **Title:** "Global Scale Feature"
- **Icon:** "Globe"
- **Feature Title:** "Global Scale"
- **Description:** "Built for global deployment with multi-region support and automatic scaling."

**Feature 4:**
- **Title:** "Developer First Feature"
- **Icon:** "Code"
- **Feature Title:** "Developer First"
- **Description:** "Rich APIs, webhooks, and SDKs for every major platform and programming language."

**Feature 5:**
- **Title:** "Team Collaboration Feature"
- **Icon:** "Users"
- **Feature Title:** "Team Collaboration"
- **Description:** "Advanced workflows, approval processes, and role-based permissions for seamless teamwork."

**Feature 6:**
- **Title:** "Analytics Feature"
- **Icon:** "BarChart3"
- **Feature Title:** "Analytics & Insights"
- **Description:** "Deep insights into content performance with built-in analytics and custom reporting."

### **5. Stats Entry**
- **Title:** "Homepage Stats"
- **Section Title:** "Trusted by Teams Worldwide"
- **Stats Items:**
  ```
  Label: "Uptime", Value: 99.9, Suffix: "%"
  Label: "API Calls/Month", Value: 10, Suffix: "M+"
  Label: "Companies", Value: 500, Suffix: "+"
  Label: "Expert Support", Value: 24, Suffix: "/7"
  ```

## 🔧 After Import

### **1. Install Dependencies**
```bash
npm install @contentstack/delivery-sdk
```

### **2. Set Environment Variables**
Create `.env` file:
```env
VITE_CONTENTSTACK_API_KEY=your_api_key_here
VITE_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token_here
VITE_CONTENTSTACK_ENVIRONMENT=your_environment_name
VITE_CONTENTSTACK_REGION=us
```

### **3. Test Your Site**
```bash
npm run dev
```

## 🎉 Expected Results

After completing the setup:
- ✅ **Dynamic Header** - Navigation from CMS
- ✅ **Dynamic Hero** - Homepage hero content from CMS
- ✅ **Dynamic Features** - Features section from CMS
- ✅ **Dynamic Stats** - Statistics counters from CMS
- ✅ **Dynamic Footer** - Footer content from CMS (if imported)

## 🚨 Troubleshooting

### **Common Import Issues:**
1. **"Invalid JSON"** - Check JSON syntax in the file
2. **"Field already exists"** - Content type might already exist
3. **"Permission denied"** - Check your role permissions in Contentstack

### **Content Not Loading:**
1. Verify environment variables are correct
2. Check API key and delivery token
3. Ensure content is published (not just saved as draft)
4. Check browser console for errors

## 📞 Need Help?

If you encounter any issues:
1. Check the JSON syntax in the schema files
2. Verify your Contentstack credentials
3. Ensure content is published, not just saved
4. Check browser console for detailed error messages

## ⚡ Quick Test

After importing and creating content:
1. Save all entries as **Published** (not Draft)
2. Start your dev server: `npm run dev`
3. Visit `http://localhost:5000`
4. You should see your dynamic content!

**Your site will be fully dynamic and CMS-driven!** 🚀
