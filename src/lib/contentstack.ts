import contentstack from '@contentstack/delivery-sdk';
import Contentstack from 'contentstack'; // Add old SDK for Live Preview
import ContentstackLivePreview from '@contentstack/live-preview-utils';

// Contentstack configuration
const stackConfig = {
  apiKey: import.meta.env.VITE_CONTENTSTACK_API_KEY,
  deliveryToken: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN,
  environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT,
  region: import.meta.env.VITE_CONTENTSTACK_REGION || 'us',
  previewToken: import.meta.env.VITE_CONTENTSTACK_PREVIEW_TOKEN,
};

// Validate required environment variables
if (!stackConfig.apiKey || !stackConfig.deliveryToken || !stackConfig.environment) {
  console.error('Missing required Contentstack environment variables');
  console.error('Required: VITE_CONTENTSTACK_API_KEY, VITE_CONTENTSTACK_DELIVERY_TOKEN, VITE_CONTENTSTACK_ENVIRONMENT');
} else {
  console.log('✅ Contentstack configured successfully');
  console.log('📊 Environment:', stackConfig.environment);
  console.log('🌍 Region:', stackConfig.region);
  console.log('🔑 API Key:', stackConfig.apiKey?.substring(0, 8) + '...');
  
  if (stackConfig.previewToken) {
    console.log('🔍 Preview Token configured for Live Preview');
  } else {
    console.warn('⚠️ Preview Token missing - Live Preview may not work');
  }
}

// Create Contentstack client
const Stack = contentstack.stack({
  apiKey: 'blt1167fc5d742e4412',
  deliveryToken: 'cs2c10b5e47fde689b88e5c6f3',
  environment: 'poc',
  live_preview: {
    enable: true,
    preview_token: 'csd2476a5b61b1e5f28323ca4c',
    host: 'rest-preview.contentstack.com',
  }
});

export const contentstackClient = Stack;

// Migrate to New Preview Service (recommended)
const LivePreviewStack = Contentstack.Stack({
  api_key: 'blt1167fc5d742e4412',
  delivery_token: 'cs2c10b5e47fde689b88e5c6f3',
  environment: 'poc',
  live_preview: {
    enable: true,
    host: "rest-preview.contentstack.com",
    preview_token: "csd2476a5b61b1e5f28323ca4c"
  }
});

export { LivePreviewStack };

// Content type identifiers (matching our created schemas)
export const CONTENT_TYPES = {
  GLOBAL_SETTINGS: 'global_settings',
  NAVIGATION: 'navigation',
  HERO_SECTION: 'hero_section_v2', // Updated to V2 with layout support
  FEATURE_CARD: 'feature_card',
  CORE_PRODUCT: 'core_product',
  STATISTIC: 'statistic',
  ROLE_CARD: 'role_card',
  VALUE_CARD: 'value_card',
  TEAM_MEMBER: 'team_member',
  JOB_OPENING: 'job_opening',
  FOOTER: 'footer',
} as const;

// Debug function to test basic connectivity
export const testContentstackConnection = async () => {
  try {
    console.log('🧪 Testing Contentstack connection...');
    
    // Try to fetch any content types to see what's available
    const response = await fetch(
      `https://cdn.contentstack.io/v3/content_types?environment=${stackConfig.environment}`,
      {
        headers: {
          'api_key': stackConfig.apiKey,
          'access_token': stackConfig.deliveryToken,
        }
      }
    );
    
    const data = await response.json();
    console.log('🔍 Available Content Types:', data.content_types?.map(ct => ct.uid) || []);
    return data;
  } catch (error) {
    console.error('❌ Connection test failed:', error);
    return null;
  }
};

// Helper function to get entry by UID
export const getEntry = async (contentType: string, uid: string) => {
  try {
    const entry = await contentstackClient
      .contentType(contentType)
      .entry(uid)
      .fetch();
    return entry;
  } catch (error) {
    console.error(`Error fetching entry ${uid} from ${contentType}:`, error);
    throw error;
  }
};

// Helper function to get all entries of a content type
export const getEntries = async (contentType: string, query?: any) => {
  try {
    const entries = await contentstackClient
      .contentType(contentType)
      .entry()
      .find();
    
    return entries;
  } catch (error) {
    console.error(`Error fetching entries from ${contentType}:`, error);
    throw error;
  }
};

// Helper function to get entry by field (e.g., page_slug)
export const getEntryByField = async (
  contentType: string,
  field: string,
  value: string
) => {
  try {
    const entries = await contentstackClient
      .contentType(contentType)
      .entry()
      .find();
    
    // Find the entry with matching field value
    const matchingEntry = entries?.entries?.find(entry => entry[field] === value);
    
    return matchingEntry || null;
  } catch (error) {
    console.error(`Error fetching entry by ${field}=${value} from ${contentType}:`, error);
    throw error;
  }
};

export default contentstackClient;