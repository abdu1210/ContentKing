// Contentstack Types - Generated from our content type schemas

export interface ContentstackEntry {
  uid: string;
  title: string;
  locale: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  tags: string[];
  _workflow?: {
    uid: string;
  };
}

export interface GlobalSettings extends ContentstackEntry {
  site_title: string;
  site_logo?: {
    url: string;
    title: string;
  };
  site_tagline?: string;
  contact_email?: string;
  social_links?: {
    twitter_url?: string;
    linkedin_url?: string;
    github_url?: string;
  };
}

export interface Navigation extends ContentstackEntry {
  navigation_name: string;
  navigation_items: Array<{
    simple_link?: {
      label: string;
      url: string;
      is_external?: boolean;
    };
    dropdown_menu?: {
      label: string;
      dropdown_items: Array<{
        label: string;
        url: string;
        description?: string;
      }>;
    };
  }>;
  cta_buttons?: {
    primary_cta?: {
      text: string;
      url: string;
    };
    secondary_cta?: {
      text?: string;
      url?: string;
    };
  };
}

export interface HeroSection extends ContentstackEntry {
  hero_title: string;
  hero_subtitle?: string;
  hero_description: string;
  page_slug: string;
  hero_image?: {
    url: string;
    title: string;
  };
  primary_cta: {
    text: string;
    url: string;
    is_external?: boolean;
  };
  secondary_cta?: {
    text?: string;
    url?: string;
    is_external?: boolean;
  };
  background_style?: string;
  layout_style?: string;
}

export interface FeatureCard extends ContentstackEntry {
  feature_title: string;
  feature_description: string;
  feature_icon: string;
  feature_order: number;
  feature_category: string;
  feature_url?: string;
}

export interface CoreProduct extends ContentstackEntry {
  product_title: string;
  product_description: string;
  product_icon: string;
  product_features: string;
  product_order: number;
  product_url?: string;
}

export interface Statistic extends ContentstackEntry {
  stat_label: string;
  stat_value: string;
  stat_suffix?: string;
  stat_description: string;
  stat_order: number;
  stat_category: string;
}

export interface RoleCard extends ContentstackEntry {
  role_title: string;
  role_description: string;
  role_icon: string;
  role_benefits: string;
  role_order: number;
}

export interface ValueCard extends ContentstackEntry {
  value_title: string;
  value_description: string;
  value_icon: string;
  value_order: number;
}

export interface TeamMember extends ContentstackEntry {
  member_name: string;
  member_role: string;
  member_department?: string;
  member_bio?: string;
  member_photo?: {
    url: string;
    title: string;
  };
  member_order: number;
  social_links?: {
    linkedin_url?: string;
    twitter_url?: string;
  };
}

export interface Footer extends ContentstackEntry {
  footer_sections: {
    company_section: {
      title: string;
      links: Array<{
        label: string;
        url: string;
      }>;
    };
    products_section: {
      title: string;
      links: Array<{
        label: string;
        url: string;
      }>;
    };
    resources_section: {
      title: string;
      links: Array<{
        label: string;
        url: string;
      }>;
    };
  };
  footer_bottom: {
    copyright_text: string;
    legal_links: Array<{
      label: string;
      url: string;
    }>;
  };
}

export interface JobOpening extends ContentstackEntry {
  job_title: string;
  department: string;
  location: string;
  job_type: string;
  experience_level: string;
  job_description: string;
  requirements: string;
  benefits?: string;
  salary_range?: string;
  application_url?: string;
  job_order?: number;
}

// Response types for Contentstack SDK
export interface ContentstackResponse<T> {
  entries: T[];
}

export interface ContentstackSingleResponse<T> {
  entry: T;
}
