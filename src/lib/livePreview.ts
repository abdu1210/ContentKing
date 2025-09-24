import ContentstackLivePreview from "@contentstack/live-preview-utils";
import Contentstack from 'contentstack';

// Create Stack instance specifically for Live Preview (requires the old SDK)
const Stack = Contentstack.Stack({
  api_key: import.meta.env.VITE_CONTENTSTACK_API_KEY,
  delivery_token: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN,
  environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT,
  region: Contentstack.Region.US,
  live_preview: {
    preview_token: import.meta.env.VITE_CONTENTSTACK_PREVIEW_TOKEN,
    enable: true,
    host: 'rest-preview.contentstack.com'
  }
});

ContentstackLivePreview.init({
  enable: true,
  ssr: false,
  stackSdk: Stack,

  // Recommended: Enables Edit Tags
  editButton: { enable: true },
  stackDetails: {
    apiKey: import.meta.env.VITE_CONTENTSTACK_API_KEY,
    environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT,
    branch: "main",
  },
  clientUrlParams: {
    protocol: "https",
    host: "app.contentstack.com",
    port: 443,
  },
});

console.log("🔄 Live Preview initialized with stackSdk");

// Function to get Live Preview hash from URL
export const getLivePreviewHash = (): string | null => {
  if (typeof window === 'undefined') return null;
  
  const urlParams = new URLSearchParams(window.location.search);
  const hash = urlParams.get('live_preview') || urlParams.get('preview_hash');
  
  if (hash) {
    console.log('🔍 Live Preview hash found:', hash);
    return hash;
  }
  
  console.log('📡 No Live Preview hash found - using published content');
  return null;
};

// Enhanced onEntryChange for CSR
export const onEntryChange = ContentstackLivePreview.onEntryChange;
