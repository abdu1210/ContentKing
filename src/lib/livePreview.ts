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
    host: "app.contentstack.com", // Use region-specific host if applicable
    port: 443,
  },
});

export const onEntryChange = ContentstackLivePreview.onEntryChange;
