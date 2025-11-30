# 🎯 Contentstack Personalize Implementation Plan

## Overview

This document outlines the complete plan to implement **official Contentstack Personalize** in your ContentKing application. This is the enterprise-grade personalization solution from Contentstack, not a custom implementation.

---

## 📋 What is Contentstack Personalize?

**Contentstack Personalize** is an edge-optimized personalization engine that enables:
- **Experiences**: Create personalized content variations
- **Variants**: Multiple versions of content for different audiences
- **Audiences**: Target specific user segments
- **Real-time Personalization**: Content delivered at edge for minimal latency
- **A/B Testing**: Built-in experimentation framework
- **Analytics**: Track performance and engagement

**Official Documentation**: https://www.contentstack.com/docs/personalize

---

## 🚀 Implementation Plan

### **Phase 1: Prerequisites & Setup** (Day 1)

#### Step 1.1: Enable Personalize in Contentstack
**Action Required:**
1. Contact Contentstack support or your account manager
2. Request Personalize to be enabled for your organization
3. Confirm your subscription includes Personalize

**What You'll Get:**
- Access to Personalize dashboard
- Project UID (required for SDK initialization)
- Personalize API credentials

#### Step 1.2: Access Personalize Dashboard
**URL**: https://personalize.contentstack.com/ (or via Contentstack app)

**What to Do:**
1. Log in with your Contentstack credentials
2. Navigate to Personalize section
3. Note your **Project UID** (you'll need this)

---

### **Phase 2: Create Experiences in Contentstack** (Day 1-2)

#### Step 2.1: Understand Personalize Concepts

**Experiences**: The container for personalization
- **Segmented Experience**: Show different content to different audiences
- **A/B Test Experience**: Test multiple variants to find the best performer

**Variants**: Different versions of your content
- **Control Variant**: Original/default content
- **Treatment Variants**: Alternative versions to test

**Audiences**: Target specific user groups based on:
- Geographic location
- Device type
- User behavior
- Custom attributes
- Time of day
- Referrer source

#### Step 2.2: Create Your First Experience

**In Contentstack Personalize Dashboard:**

1. Click "Create Experience"
2. Choose type: "A/B Test" or "Segmented"
3. Name it: e.g., "Homepage Hero Test"
4. Set the **Experience Key**: e.g., `homepage_hero_test`
5. Create variants:
   - **Variant A**: Control (original)
   - **Variant B**: Treatment (alternative)

**For Each Variant:**
- Link to Contentstack entry UID
- Or configure content directly
- Set variant weight (50/50 for A/B test)

#### Step 2.3: Define Audiences (Optional)

If using Segmented Experiences:

1. Create audience segment (e.g., "Enterprise Users")
2. Define rules:
   - Company size > 100
   - Industry = Technology
   - Location = US
3. Assign variants to audiences

---

### **Phase 3: Install Personalize SDK** (Day 2)

#### Step 3.1: Install Dependencies

```bash
npm install @contentstack/personalize-edge-sdk
```

**What it provides:**
- Initialize Personalize
- Fetch active experiences
- Get variant for user
- Track events
- Set user attributes

#### Step 3.2: Add Environment Variables

Add to your `.env` file:

```env
VITE_CONTENTSTACK_PERSONALIZE_PROJECT_UID=your_project_uid_here
VITE_CONTENTSTACK_PERSONALIZE_ENABLED=true
```

---

### **Phase 4: Core Integration** (Day 2-3)

#### Step 4.1: Create Personalize Service

**File**: `src/lib/personalize.ts`

```typescript
import Personalize from '@contentstack/personalize-edge-sdk';

const personalizeConfig = {
  projectUid: import.meta.env.VITE_CONTENTSTACK_PERSONALIZE_PROJECT_UID,
};

export const initializePersonalize = async () => {
  if (!personalizeConfig.projectUid) {
    console.warn('⚠️ Personalize Project UID not configured');
    return false;
  }

  try {
    await Personalize.init(personalizeConfig.projectUid);
    console.log('✅ Contentstack Personalize initialized');
    return true;
  } catch (error) {
    console.error('❌ Personalize initialization failed:', error);
    return false;
  }
};

export const getExperiences = () => {
  return Personalize.getExperiences();
};

export const getVariant = (experienceShortId: string) => {
  return Personalize.get(experienceShortId);
};

export const setUserAttribute = (key: string, value: any) => {
  return Personalize.set(key, value);
};

export const triggerEvent = (eventName: string, properties?: any) => {
  return Personalize.triggerEvent(eventName, properties);
};

export const triggerImpression = (experienceShortId: string, variantShortId: string) => {
  return Personalize.triggerImpression(experienceShortId, variantShortId);
};
```

#### Step 4.2: Initialize in App

**File**: `src/main.tsx` or `src/App.tsx`

```typescript
import { initializePersonalize } from '@/lib/personalize';

// Initialize Personalize when app starts
initializePersonalize();
```

---

### **Phase 5: React Integration** (Day 3-4)

#### Step 5.1: Create React Hook

**File**: `src/hooks/usePersonalize.ts`

```typescript
import { useState, useEffect } from 'react';
import { getVariant, getExperiences } from '@/lib/personalize';

export const usePersonalizeExperience = (experienceShortId: string) => {
  const [variant, setVariant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVariant = async () => {
      try {
        const variantData = await getVariant(experienceShortId);
        setVariant(variantData);
      } catch (error) {
        console.error('Error fetching variant:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVariant();
  }, [experienceShortId]);

  return { variant, loading };
};

export const useAllExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getExperiences();
        setExperiences(data || []);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  return { experiences, loading };
};
```

#### Step 5.2: Create Personalized Component

**File**: `src/components/PersonalizedContent.tsx`

```typescript
import { usePersonalizeExperience } from '@/hooks/usePersonalize';
import { getEntry } from '@/lib/contentstack';
import { useEffect, useState } from 'react';

interface PersonalizedContentProps {
  experienceId: string;
  contentType: string;
  defaultEntryUid: string;
  children: (entry: any, variant: any) => React.ReactNode;
}

export const PersonalizedContent = ({
  experienceId,
  contentType,
  defaultEntryUid,
  children,
}: PersonalizedContentProps) => {
  const { variant, loading: variantLoading } = usePersonalizeExperience(experienceId);
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        // Use variant entry UID if available, otherwise use default
        const entryUid = variant?.entryUid || defaultEntryUid;
        const entryData = await getEntry(contentType, entryUid);
        setEntry(entryData);
      } catch (error) {
        console.error('Error fetching entry:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!variantLoading) {
      fetchEntry();
    }
  }, [variant, variantLoading, contentType, defaultEntryUid]);

  if (loading || variantLoading) {
    return <div>Loading...</div>;
  }

  return <>{children(entry, variant)}</>;
};
```

---

### **Phase 6: Implement on Homepage** (Day 4)

#### Step 6.1: Update Hero Section

**File**: `src/pages/Index.tsx`

```typescript
import { PersonalizedContent } from '@/components/PersonalizedContent';
import { HeroSection } from '@/components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Personalized Hero Section */}
      <PersonalizedContent
        experienceId="homepage_hero_test"
        contentType="hero_section_v2"
        defaultEntryUid="hero_home"
      >
        {(entry, variant) => (
          <HeroSection data={entry} personalization={variant} />
        )}
      </PersonalizedContent>
      
      <Features />
      <Footer />
    </div>
  );
};
```

---

### **Phase 7: Event Tracking** (Day 5)

#### Step 7.1: Track User Interactions

```typescript
import { triggerEvent, triggerImpression } from '@/lib/personalize';

// Track impressions
triggerImpression('homepage_hero_test', 'variant_a');

// Track clicks
const handleCTAClick = () => {
  triggerEvent('cta_click', {
    experience: 'homepage_hero_test',
    button: 'Start Free Trial'
  });
};

// Track conversions
const handleSignup = () => {
  triggerEvent('signup_completed', {
    plan: 'premium',
    experience: 'homepage_hero_test'
  });
};
```

#### Step 7.2: Set User Attributes

```typescript
import { setUserAttribute } from '@/lib/personalize';

// Set user attributes for targeting
setUserAttribute('user_type', 'enterprise');
setUserAttribute('industry', 'technology');
setUserAttribute('company_size', '500+');
setUserAttribute('location', 'US');
```

---

### **Phase 8: Testing & Optimization** (Day 5-7)

#### Step 8.1: Test Different Experiences

1. Create multiple variants in Personalize dashboard
2. Set traffic allocation (e.g., 50/50 split)
3. Deploy and monitor

#### Step 8.2: Analyze Results

In Contentstack Personalize Dashboard:
- View experience performance
- Check variant metrics
- Analyze audience engagement
- Determine winning variant

#### Step 8.3: Optimize

Based on data:
- Adjust variant content
- Refine audience targeting
- Change traffic allocation
- Launch new experiments

---

## 📊 Use Cases

### 1. **Homepage Hero Personalization**
- **Audience**: New Visitors
  - Variant: Educational content, "Learn More" CTA
- **Audience**: Returning Visitors
  - Variant: Product features, "Start Free Trial" CTA

### 2. **Pricing Page Optimization**
- **Variant A**: Annual billing highlighted
- **Variant B**: Monthly billing highlighted
- **Measure**: Conversion rate

### 3. **Feature Highlighting**
- **Audience**: Developers
  - Show API documentation, technical features
- **Audience**: Business Users
  - Show ROI, ease of use

### 4. **Geographic Personalization**
- **US Visitors**: Dollar pricing, US case studies
- **EU Visitors**: Euro pricing, GDPR compliance
- **Asia Visitors**: Localized content

---

## 🔧 Advanced Features

### **A. Audience Segmentation**

```typescript
// Set attributes for segmentation
setUserAttribute('role', 'developer');
setUserAttribute('experience_level', 'senior');
setUserAttribute('company_size', 'enterprise');
```

### **B. Real-time Personalization**

```typescript
// Personalization happens at the edge
// Content delivered with minimal latency
// No server-side rendering required
```

### **C. Multi-variant Testing**

```typescript
// Test multiple variants (A/B/C/D)
// Automatically determine winner
// Statistical significance calculation
```

### **D. Integration with CDP**

```typescript
// Connect with Customer Data Platforms
// Sync user data via Data & Insights (Lytics)
// Unified customer profiles
```

---

## 📦 Required Information from You

Before implementation, please provide:

1. **Contentstack Personalize Access**
   - [ ] Is Personalize enabled for your organization?
   - [ ] Do you have access to Personalize dashboard?

2. **Project UID**
   - [ ] What is your Personalize Project UID?

3. **Experiences Created**
   - [ ] Have you created any experiences yet?
   - [ ] What content do you want to personalize?

4. **Use Cases**
   - [ ] Which pages to personalize? (Homepage, Pricing, Features?)
   - [ ] What variants to test?
   - [ ] What audiences to target?

---

## ⏱️ Timeline Estimate

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| 1. Prerequisites | 1 day | Contact Contentstack support |
| 2. Create Experiences | 1-2 days | Dashboard access |
| 3. Install SDK | 0.5 day | Network connectivity |
| 4. Core Integration | 1-2 days | Project UID |
| 5. React Integration | 1-2 days | SDK installed |
| 6. Homepage Implementation | 1 day | Experiences created |
| 7. Event Tracking | 1 day | - |
| 8. Testing & Optimization | 2-3 days | Live experiences |
| **Total** | **7-10 days** | - |

---

## 🎯 Next Steps

**To proceed, I need you to:**

1. **Confirm Personalize Access**
   - Check if Personalize is enabled
   - Share your Project UID (if available)

2. **Define Use Cases**
   - Which pages to personalize?
   - What content variations to test?

3. **Network Stability**
   - Ensure npm can install packages
   - Or we can wait for stable connection

**Once you provide this information, I can begin the actual implementation!**

---

## 📚 Resources

- **Official Docs**: https://www.contentstack.com/docs/personalize
- **SDK Docs**: https://personalize-sdk-docs.contentstackapps.com
- **Personalize Dashboard**: https://personalize.contentstack.com
- **Support**: Contact Contentstack support team

---

**Ready to implement official Contentstack Personalize when you provide the required information!** 🚀



