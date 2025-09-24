import contentstack from '@contentstack/delivery-sdk';
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

// Create Contentstack client with Preview Service configuration
export const contentstackClient = contentstack.stack({
  apiKey: stackConfig.apiKey,
  deliveryToken: stackConfig.deliveryToken,
  environment: stackConfig.environment,
  region: stackConfig.region,
  live_preview: {
    enable: true,
    host: "rest-preview.contentstack.com",
    preview_token: stackConfig.previewToken
  }
});

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

// Preview Service constants
const CONTENTSTACK_CDN_URL = "cdn.contentstack.io";
const PREVIEW_HOST_NAME = "rest-preview.contentstack.com";

// Function to get headers for API requests
function getHeaders() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("access_token", stackConfig.deliveryToken);
  headers.append("api_key", stackConfig.apiKey);
  return headers;
}

// Preview Service compatible fetch function
export const fetchPreviewData = async (ctUID: string, entryUID: string, hash: string | null = null) => {
  const contentstackURL = new URL(
    `https://${CONTENTSTACK_CDN_URL}/v3/content_types/${ctUID}/entries/${entryUID}?environment=${stackConfig.environment}`
  );
  
  const headers = getHeaders();
  
  if (hash && stackConfig.previewToken) {
    // Use Preview Service
    headers.append("live_preview", hash);
    headers.append("preview_token", stackConfig.previewToken);
    contentstackURL.hostname = PREVIEW_HOST_NAME;
    console.log('🔄 Using Preview Service with hash:', hash);
  } else {
    // Use regular CDN
    contentstackURL.hostname = CONTENTSTACK_CDN_URL;
    console.log('📡 Using regular CDN');
  }
  
  const res = await fetch(contentstackURL.toString(), {
    method: "GET",
    headers: headers,
  });
  
  return res.json();
};

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